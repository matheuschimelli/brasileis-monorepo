/* This example requires Tailwind CSS v2.0+ */
import {
  AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon,
} from '@heroicons/react/outline';

const features = [
  {
    name: 'Atualização automática',
    description:
      'Buscamos e atualizamos de forma automática leis e jurisprudências para que você encontre tudo em um único lugar de forma organizada.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Sistema de petições',
    description:
      'Crie e altere modelos de petições de forma rápida e intuitiva com o nosso editor de petições',
    icon: ScaleIcon,
  },
  {
    name: 'Ferramentas poderosas',
    description:
      'Marque, anote e salve e organize para depois leis ou jurisprudências. Você ainda pode criar sua própria biblioteca de leis para se organizar melhor.',
    icon: LightningBoltIcon,
  },
  {
    name: 'Feed de leis',
    description:
      'Siga tópicos do seu interesse e receba atualizações no seu feed sempre que uma nova lei for atualizada ou publicada.',
    icon: AnnotationIcon,
  },
];

export default function Features() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">O que é o Brasileis?</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A melhor ferramenta para operadores do direito
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            O Brasileis é um sistema de busca com ferramentas que ajudam advogados,
            juristas e bacharelandos a realizarem buscas de forma fácil, rápida e desconplicada.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
