import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class splitCommandLineProgram_6_11_ver2 {
    static class App {
        static long run(String[] args) throws IOException {
            CommandLine commandLine = new CommandLine(args);
            return countOrders(commandLine);
        }

        private static long countOrders(CommandLine commandLine) throws IOException{
            File input = Paths.get(commandLine.filename()).toFile();
            ObjectMapper mapper = new ObjectMapper();
            Order[] orders = mapper.readValue(input, Order[].class);
            if (commandLine.onlyCountReady()) {
                return Stream.of(orders).filter(o -> "ready".equals(o.status)).count();
            } else return orders.length;
        }

        

        public class CommandLine {
            String[] args;
        
            public CommandLine(String[] args) {
                this.args = args;
                if (args.length == 0) throw new RuntimeException("파일명을 입력하세요.");
            }

            String filename() {
                return args[args.length - 1];
            }
             boolean onlyCountReady() {
                return Stream.of(args).anyMatch(arg -> "-r".equals(arg));
            }
        }
    }
}
