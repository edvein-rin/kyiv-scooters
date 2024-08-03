import { FC } from "react";

import { scooterProviders } from "data/scooterProviders";
import { Link } from "components/link";
import { TextSection } from "components/text-section";

export const IntroSection: FC = () => (
  <TextSection>
    <h1>Порівняння електросамокатів Києва</h1>
    <p>
      <span>
        В Києві є <b>{scooterProviders.length}</b> провайдерів електросамокатів
        (насправді є ще <b>E-wings</b>, але його потестити не вдалося):{" "}
        <ul>
          {scooterProviders.map((scooterProvider, index) => (
            <li>
              <b>{scooterProvider.title}</b> (
              <Link
                href={scooterProvider.androidAppDownloadUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                Android
              </Link>
              ,{" "}
              <Link
                href={scooterProvider.iosAppDownloadUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                iOS
              </Link>
              ){index === scooterProviders.length - 1 ? "." : ","}
            </li>
          ))}
        </ul>
      </span>
    </p>
  </TextSection>
);
