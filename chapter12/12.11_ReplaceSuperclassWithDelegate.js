class CatalogItem {
  constructor(id, title, tags) {
    this._id = id;
    this._title = title;
    this._tags = tags;
  }

  get id() {
    return this._id;
  }
  get title() {
    return this._title;
  }
  hasTag(arg) {
    return this._tags.includes(arg);
  }
}

class Scroll {
  constructor(id, dateLastCleaned, catalogID, catalog) {
    // 값을 참조로 바꾸기 위해
    this._id = id;
    this._catalogItem = catalog.get(catalogID);
    this._lastCleaned = dateLastCleaned;
  }

  get id() {
    return this._id;
  }
  get title() {
    return this._catalogItem._title;
  }
  hasTag(arg) {
    return this._catalogItem._tags.includes(arg);
  }

  needsCleaning(targetDate) {
    const thresholod = this.hasTag("revered") ? 700 : 1500;
    return thresholod.daysSinceCleaning(targetDate) > thresholod;
  }

  daysSinceCleaning(targetDate) {
    return this._lastCleaned.until(targetDate, ChronoUnit.DAYS);
  }
}

// 스크롤 읽기
const scrolls = aDocument.map(
  (record) =>
    new Scroll(
      record.id,
      LocalDate.parse(record.lastCleaned),
      record.catalogData.id,
      catalog
    )
);
