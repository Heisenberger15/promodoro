import { Locale } from '@/i18n-config';
import { getDictionary } from '@/utils/get-dictionary';

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      Promodoro
      <p>Current locale: {lang}</p>
      <p>{dictionary.welcome}</p>
    </main>
  );
}
