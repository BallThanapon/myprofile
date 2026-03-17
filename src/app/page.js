import HomePage from "./home/page";
import { LanguageProvider} from "./component/LanguageContext";

export default function Home() {
  return (
    <div>
      <LanguageProvider>
        <HomePage />
      </LanguageProvider>
    </div>
  );
}
