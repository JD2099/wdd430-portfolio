import SkillCard from '@/components/SkillCardProps';

export default function AboutPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
        About Me
      </h1>
      <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
        Welcome to my portfolio! I am a software developer passionate about building scalable web applications, modern user interfaces, and enterprise automation solutions.
      </p>

      <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
        Technical Skills
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SkillCard 
          title="Frontend & React" 
          category="Web Development" 
          description="Building modern, responsive user interfaces using Next.js, React, Tailwind CSS, and TypeScript." 
        />
        <SkillCard 
          title="Backend & Databases" 
          category="Server-side" 
          description="Developing robust APIs and services with Node.js, Express, C#.NET, SQL Server, and PostgreSQL." 
        />
        <SkillCard 
          title="Enterprise Solutions" 
          category="Cloud & Power Platform" 
          description="Designing automated workflows and data management applications using Power Apps, Power Automate, and Dataverse." 
        />
      </div>
    </main>
  );
}