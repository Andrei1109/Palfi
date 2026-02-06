import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const subscriptions = [
  {
    name: 'Entry',
    hours: '1 oră inclusă / lună',
    description: 'Perfect pentru afaceri mici care au nevoie ocazional de mici modificări de conținut (texte, poze, informații).',
    popular: false,
  },
  {
    name: 'Mid',
    hours: '2 ore incluse / lună',
    description: 'Ideal dacă actualizezi periodic servicii, prețuri, promoții sau programul de funcționare.',
    popular: true,
  },
  {
    name: 'Business',
    hours: '4 ore incluse / lună',
    description: 'Potrivit pentru afaceri cu campanii dese, landing page-uri simple sau secțiuni noi regulate.',
    popular: false,
  },
];

export default function SubscriptionCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
      {subscriptions.map((sub) => (
        <Card key={sub.name} className="flex flex-col text-center relative">
          {sub.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-semibold">
              Popular
            </div>
          )}
          <h3 className="text-3xl font-bold text-primary mb-2">{sub.name}</h3>
          <p className="text-gray-600 font-semibold mb-4">{sub.hours}</p>
          <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{sub.description}</p>
          <Button href="/servicii" variant="secondary">
            Detalii complete
          </Button>
        </Card>
      ))}
    </div>
  );
}
