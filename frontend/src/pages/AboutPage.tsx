import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <main className="container about-page">
      <div className="eyebrow">ОДИН КАМПУС. СВОИ ЛЮДИ.</div>
      <h1>
        Университет —<br />
        больше, чем пары.
      </h1>
      <p>
        PolEvent — проект для внеучебной жизни ЯГТУ. Встречи по интересам, спортивные активности,
        творческие вечера и студенческие инициативы помогают найти свою компанию и попробовать
        что-то новое.
      </p>
      <p>
        Мы хотим собрать информацию о мероприятиях кампуса в одном месте, чтобы студентам было проще
        узнавать о событиях, а организаторам — рассказывать о своих идеях.
      </p>
      <Link className="button" to="/">
        На главную
        <ArrowUpRight size={18} aria-hidden="true" />
      </Link>
    </main>
  );
}
