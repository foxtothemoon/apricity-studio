import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const sites = [
  {
    id: "pension-canine",
    name: "Pension Canine",
    url: "https://pensioncaninefamiliale.fr/",
    image: "/pension-canine.png",
    tags: ["WordPress", "Web Design"]
  },
  {
    id: "piger-tech",
    name: "Piger Tech",
    url: "https://piger-tech.com/en/",
    image: "/piger-tech.png",
    tags: ["WordPress", "B2B"]
  },
  {
    id: "siam-pet",
    name: "Siam Pet Products",
    url: "https://siampetproducts.com/",
    image: "/siam-pet.png",
    tags: ["WordPress", "E-Commerce"]
  }
];

export default function WordPressWork() {
  const { t } = useLanguage();

  return (
    <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-t border-stone-200">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 relative z-10">
        <div>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 italic">{t('wordpress.title')}</h2>
          <p className="text-lg text-stone-600 max-w-2xl font-sans">
            {t('wordpress.desc')}
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {sites.map((site, index) => (
          <motion.div 
            key={site.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="group flex flex-col"
          >
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="block relative aspect-[4/3] w-full overflow-hidden border border-stone-900 mb-6 rounded-sm">
              <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <img 
                src={site.image} 
                alt={site.name} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-stone-50 border border-stone-900 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 z-20">
                <ArrowUpRight className="w-4 h-4 text-stone-900" />
              </div>
            </a>
            
            <div className="flex flex-col flex-grow">
              <h3 className="text-2xl font-serif text-stone-900 mb-4">{site.name}</h3>
              <div className="flex flex-wrap gap-2 mt-auto">
                {site.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-3 py-1 border border-stone-200 rounded-full text-xs font-sans tracking-widest text-stone-500 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
