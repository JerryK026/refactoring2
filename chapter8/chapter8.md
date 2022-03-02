# 기능 이동

함수 옮기기 : 다른 클래스나 모듈로 함수를 옮길 때 사용한다.  
필드 옮기기 : 마찬가지로 필드를 옮길 때 사용한다.

문장을 함수로 옮기기 : 문장을 함수 안이나 바깥으로 옮길 때 사용한다.  
문장을 호출한 곳으로 옮기기 : 마찬가지이다.

인라인 코드를 함수 호출로 바꾸기 : 한 덩어리의 뭄낮들이 기존 함수와 같은 일을 할 때 중복을 제거한다.

반복문 쪼개기 : 각각의 반복문이 하나의 일만 수행하도록 보장한다.
반복문을 파이프라인으로 바꾸기 : 반복문을 완전히 없애버린다.

죽은 코드 제거하기 : 필요 없는 문장을 제거한다.

## 8.1 함수 옮기기

좋은 SW 설계의 핵심은 모듈화가 얼마나 잘 되어 있느냐를 뜻하는 **_모듈성_**이다. 모듈성은 프로그램의 어딘가를 수정하려 할 때 해당 기능과 깊이 관련된 작은 일부만 이해해도 가능하게 해주는 능력이다. 모듈성을 높이려면 서로 연관된 요소들을 함께 묶고, 요소 사이의 연결 관계를 쉽게 찾고 이해할 수 있도록 해야 한다. 하지만 프로그램을 얼마나 잘 이해했느냐에 따라 구체적인 방법이 달라질 수 있다. 보통은 이해도가 높아질수록 SW 요소들을 더 잘 묶는 새로운 방법을 깨우치게 된다. 그래서 높아진 이해를 반영하려면 요소들을 이리저리 옮겨야 할 수 있다.

객체 지향 프로그래밍의 핵심 모듈화 컨텍스트는 클래스며, 프로그래밍 언어들은 저마다의 모듈화 수단을 제공한다.

어떤 함수가 자신이 속한 모듈 A의 요소들보다 다른 모듈 B의 요소들을 더 많이 참조하면 모듈 B로 옮겨줘야 캡슐화가 좋아진다.

함수도 마찬가지로 호출자들을 보고 함수 위치를 옮겨야 한다.

함수를 옮길지 말지 정하기 어려우므로 대상 함수의 현재 컨텍스트와 후보 컨텍스트를 둘러보면 도움이 될 수 있다. 대상 함수를 호출하는 함수들은 무엇이고 사용하는 데이터는 무엇인가를 살펴봐야 한다.

1. 선택한 함수가 현재 컨텍스트에서 사용 중인 모든 프로그램 요소를 살펴본다. 이 요소들 중에도 함께 옮겨야 할 게 있는지 고민해본다.
   - 호출되는 함수 중 함께 옮길 게 있다면 먼저 옮기는 게 나을 때가 많다. 얽혀 있는 함수가 여럿이라면 다른 곳에 영향을 덜 주는 함수부터 옮긴다.
   - 하위 함수들의 호출자가 고수준 함수 하나라면 하위 함수들을 인라인한 후, 고수준 함수를 옮기고 옮긴 위치에서 재추출한다.
2. 선택한 함수가 다형 메서드인지 확인한다.
   - 같은 메서드가 슈퍼클래스나 서브클래스에도 선언되어 있는지까지 고려한다.
3. 선택한 함수를 타깃 컨텍스트로 복사한다(이때 원래의 함수를 `소스 함수`라 하고 복사해 만든 새로운 함수를 `타깃 함수`라 한다). 타깃 함수가 새로운 곳에 잘 위치하도록 다듬는다.
   - 함수 본문에서 소스 컨텍스트의 요소를 사용한다면 해당 요소들을 매개변수로 넘기거나 소스 컨텍스트 자체를 참조로 넘겨준다.
   - 함수를 옮기면 새로운 컨텍스트에 어울리는 이름으로 바꾼다.
4. 정적 분석을 수핸한다.
5. 소스 컨텍스트에서 타깃 함수를 참조할 방법을 찾아 반영한다.
6. 소스 함수를 타깃 함수의 위임 함수가 되도록 수정한다.
7. 테스트한다.
8. 소스 함수를 인라인할지 고민해본다.
   - 소스 함수는 언제까지라도 위임 함수로 남겨둘 수 있다. 하지만 소스 함수를 호출하는 곳에서 타깃 함수를 직접 호출하는 데 무리가 없다면 중간 단계(소스 함수)는 제거하는 편이 낫다.

## 8.2 필드 옮기기

데이터 구조는 자연스럽고 단순하고 직관적으로 다뤄야 그 프로그램이 하는 일을 파악하기 쉽다. 이를 위해 도메인 주도 설계 같은 기술이 좋다는 게 증명됐다.

그럼에도 초기 설계에는 실수가 많았고 프로젝트를 진행할수록 도메인과 데이터 구조가 잘못된 걸 깨닫고 곧바로 수정할 때가 잦다.

예를 들어 함수에 어떤 레코드를 넘길 때마다 또 다른 레코드의 필드도 함께 넘긴다면 위치를 옮겨야할 것이다. 함수에 항상 함께 건네지는 데이터 조각들은 상호 관계가 명확하게 드러나도록 한 레코드에 담는 게 가장 좋다.

변경 또한 주요 요인이다. 한 레코드를 변경할 때 다른 레코드의 필드까지 변경해야만 한다면 필드의 위치가 잘못되었다는 신호다.

레코드 대신 클래스나 객체가 와도 똑같다. 클래스는 함수가 곁들여진 레코드라고할 수 있다.

1. 소스 필드가 캡슐화되어 있지 않다면 캡슐화한다.
2. 테스트한다.
3. 타깃 객체에 필드 (와 접근자 메서드들)를 생성한다.
4. 정적 검사를 수행한다.
5. 소스 객체에서 타깃 객체를 참조할 수 있는지 확인한다.
   - 기존 필드나 메서드 중 타깃 객체를 넘겨주는 게 있을지 모른다. 없다면 이런 기능의 메서드를 쉽게 만들 수 있는지 살펴보고 간단치 않다면 타깃 객체를 저장할 새 필드를 소스 객체에 생성한다. 이는 영구적인 변경이지만 다시 없앨 수 있을 때도 있다.
6. 접근자들이 타깃 필드를 사용하도록 수정한다.
   - 여러 소스에서 같은 타깃을 공유하면 먼저 세터를 수정해 타깃 필드와 소스 필드 모두를 갱신하게 하고, 일관성을 깨뜨리는 갱신을 검출할 수 있도록 어서션을 추가한다. 모든 게 잘 마무리되면 접근자들이 타깃 필드를 사용하도록 수정한다.
7. 테스트한다.
8. 소스 필드를 제거한다.
9. 테스트한다.

## 8.3 문장을 함수로 옮기기

중복 코드를 제거해 반복되는 부분에서 한 부분만 수정하면 된다. 단, 문장을 함수로 옮길 때 그 문장들이 피호출 함수의 일부라는 확신이 있어야 한다.

1. 반복 코드가 함수 호출 부분과 멀리 떨어져 있다면 문장 슬라이딩하기를 적용해 근처로 옮긴다.
2. 타깃 함수를 호출하는 곳이 한 곳뿐이면, 단순히 소스 위치에서 해당 코드를 잘라내어 피호출 함수로 복사하고 테스트한다. 이 경우라면 나머지 단계는 무시한다.
3. 호출자가 둘 이상이면 호출자 중 하나에서 '타깃 함수 호출 부분과 그 함수로 옮기려는 문장들을 함께' 다른 함수로 추출한다. 추출한 함수에 기억하기 쉬운 임시 이름을 지어준다.
4. 다른 호출자 모두가 방금 추출한 함수를 사용하도록 수정한다. 하나씩 수정할 때마다 테스트한다.
5. 모든 호출자가 새로운 함수를 사용하게 되면 원래 함수를 새로운 함수 안으로 인라인한 후 원래 함수를 제거한다.
6. 새로운 함수의 이름을 원래 함수의 이름으로 바꿔준다.
   - 더 나은 이름이 있다면 그 이름을 쓴다.

## 8.4 문장을 호출한 곳으로 옮기기

1. 호출자가 한두 개뿐이고 피호출 함수도 간단한 단순한 상황이면, 피호출 함수의 처음(혹은 마지막)줄(들)을 잘라내어 호출자(들)로 복사해 넣는다(필요하면 적당히 수정한다). 테스트만 통과하면 리팩터링은 끝난다.
2. 더 복잡한 상황에서는, 이동하지 '않길' 원하는 모든 문장을 함수로 추출한 다음 검색하기 쉬운 임시 이름을 지어준다.
   - 대상 함수가 서브클래스에서 오버라이드됐다면 오버라이드한 서브클래스들의 메서드 모두에서 동일하게 남길 부분을 메서드로 추출한다. 이때 남겨질 메서드의 본문은 모든 클래스에서 똑같아야 한다. 그런 다음 슈퍼클래스의 메서드만 남기고 서브클래스들의 메서드를 제거한다.
3. 원래 함수를 인라인한다.
4. 추출한 함수의 이름을 원래 함수의 이름으로 변경한다(함수 이름 바꾸기)
   - 더 나은 이름이 떠오르면 그 이름을 사용한다.

## 8.5 인라인 코드를 함수 호출로 바꾸기

이미 존재하는 함수와 똑같은 일을 하는 인라인 코드를 함수 호출로 대체하자. 이 경우 동작은 바뀌어선 안 된다. 이 경우인지 잘 모르겠다면 함수 이름을 보고 판단하자. 이름을 잘 지었다면 인라인 코드 대신 함수 이름을 넣어도 말이 된다.

1. 인라인 코드를 함수 호출로 대체한다.
2. 테스트한다.

## 8.6 문장 슬라이드하기

관련 코드들은 가까이 있을 때 이해하기 더 쉽다. 이런 경우 문장 슬라이드하기를 통해 이런 코드들을 한데 모아둔다. 예를 들면 변수 선언이 있다. 모든 변수 선언을 함수 첫머리에 모아두는 사람도 있지만, 처음 사용할 때 선언하는 스타일을 선호한다.

1. 코드 조각(문장들)을 이동할 목표 위치를 찾는다. 코드 조각의 원래 위치와 목표 위치 사이의 코드들을 훑어보면서, 조각을 모으고 나면 동작이 달라지는 코드가 있는지 살핀다. 다음과 같은 간섭이 있다면 이 리팩터링을 포기한다.
   - 코드 조각에서 참조하는 요소를 선언하는 문장 앞으로는 이동할 수 없다.
   - 코드 조각을 참조하는 요소의 뒤로는 이동할 수 없다.
   - 코드 조각에서 참조하는 요소를 수정하는 문장을 건너뛰어 이동할 수 없다.
   - 코드 조각이 수정하는 요소를 참조하는 요소를 건너뛰어 이동할 수 없다.
2. 코드 조각을 원래 위치에서 잘라내어 목표 위치에 붙여 넣는다.
3. 테스트한다.

코드 조각을 슬라이드할 때는 두 가지를 확인해야 한다. 1. 무엇을 슬라이드할지 2. 슬라이드할 수 있는지

무엇을 슬라이드할지는 맥락과 관련이 깊다.

코드를 슬라이드할 코드 자체와 그 코드가 건너뛰어야 할 코드를 모두 살펴본 뒤 코드 순서가 바뀌면 프로그램의 겉보기 동작이 달라지는지 확인한다. 혹시 모르니 건너뛰는 함수의 내부를 살펴 아무 부수효과가 없는지 확인한다. 만약 부수효과가 없는 코드를 짠다면 그냥 넘길 수 있을 것이다.

슬라이드가 안전한지를 판단하려면 관련된 연산이 무엇이고 어떻게 구성되는지를 완벽히 이해해야 한다.

상태 갱신에 특히나 신경 써야 하기 때문에 상태 갱신 코드 자체를 최대한 제거하는 게 좋다.

데이터 구조가 복잡하다면 테스트를 수시로 돌려 깨지는 게 없는지 확인한다. 테스트가 실패했을 때는 더 작게 슬라이드하면 좋은 대처가 된다. 테스트 실패는 그 슬라이드를 수행할 가치가 없거나, 다른 무언가를 먼저 하라는 뜻일 수도 있다.

## 8.7 반복문 쪼개기

종종 반복문 하나에서 두 가지 일을 수행하는 모습을 볼 수 있는데, 이렇게 하면 반복문을 수정해야 할 때마다 두 가지 일 모두를 잘 이해하고 진행해야 한다. 반대로 각각의 반복문으로 분리해두면 수정할 동작 하나만 이해하면 되고 사용하기도 쉬워진다.

이 리팩터링을 불편해하는 사람도 있지만, 리팩터링과 최적화를 구분하자. 리팩터링이 잘된 코드는 병목이라 밝혀졌을 때 다시 하나로 합치기도 쉽다.

1. 반복문을 복제해 두 개로 만든다.
2. 반복문이 중복되어 생기는 부수효과를 파악해 제거한다.
3. 테스트한다.
4. 완료됐으면, 각 반복문을 함수로 추출할지 고민해본다.

## 8.8 반복문을 파이프라인으로 바꾸기

1. 반복문에서 사용하는 컬렉션을 가리키는 변수를 하나 만든다.
2. 반복문의 첫 줄부터 시작해서, 각각의 단위 행위를 적절한 컬렉션 파이프라인으로 대체한다. 이때 컬렉션 파이프라인 연산은 1.에서 만든 반복문 컬렉션 변수에서 시작하여, 이전 연산의 결과를 기초로 연쇄적으로 수행한다. 하나를 대체할 때마다 테스트한다.
3. 반복문의 모든 동작을 대체했다면 반복문 자체를 지운다.
   - 반복문이 결과를 누적 변수에 대입했다면 파이프라인의 결과를 그 누적 변수에 대입한다.

## 8.9 죽은 코드 제거하기

1. 죽은 코드를 외부에서 참조할 수 있는 경우라면 (ex. 함수 하나가 통쨰로 죽었을 때) 혹시라도 호출하는 곳이 있는지 확인한다.
2. 없다면 죽은 코드를 제거한다.
3. 테스트한다.