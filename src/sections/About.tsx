import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">About Me</h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
            Gen AI developer and technical lead with experience building business applications, from CRMs and internal management systems to AI-powered products, using React.js and JavaScript. Interested in practical AI, scalable systems, and product-focused development. I hold a B.Sc. in Computer Science and bring practical, hands-on experience from shipping real e-commerce and internal management systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
