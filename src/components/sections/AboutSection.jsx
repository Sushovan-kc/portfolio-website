export default function AboutSection() {
    const paragraphs = [
        'I am a Computer Engineering graduate and AI/ML Engineer passionate about building intelligent systems that solve practical problems. My interests lie at the intersection of machine learning research, computer vision, medical imaging, and software engineering.',
        'I enjoy working across the entire development lifecycle, from exploring datasets and designing preprocessing pipelines to training models, evaluating performance, and deploying solutions that people can actually use. For me, a successful AI system is not just about achieving good metrics; it is about building something reliable, efficient, and useful beyond the experiment.',
        'My work includes deep learning-based medical image segmentation, vehicle detection, and self-supervised learning. I am particularly interested in making AI more practical by improving model performance, reducing dependence on labeled data, and bridging the gap between research and real-world deployment.',
        'Beyond machine learning, I build web applications that bring these systems to life using Python, PyTorch, TensorFlow, FastAPI, Django, and React. I value clean code, thoughtful architecture, reproducible experiments, and interfaces that make complex technology easier to use.',
        'I am continuously learning, experimenting with new approaches, and looking for opportunities to collaborate on meaningful problems. My goal is to build technology that does not just work in theory, but makes a measurable difference in practice.',
    ]

    return (
        <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:px-10">
            <div className="rounded-2xl border border-ink/10 bg-ink/4 p-8 text-left shadow-[0_8px_32px_0_rgba(0,0,0,0.05)] dark:border-paper/10 dark:bg-paper/4 sm:p-10 lg:p-14">
                <div className="flex items-start gap-4">
                    <p className="text-sm font-bold uppercase tracking-[.2em] text-lime">01 / About</p>
                    <span className="mt-2 hidden h-px w-16 bg-lime/50 lg:block" />
                </div>
                <div className="mt-10 max-w-4xl">
                    <h2 className="mb-8 max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-5xl">
                        Building useful AI from research to reality.
                    </h2>
                    <div className="space-y-6 text-lg leading-8 text-ink/80 dark:text-paper/80">
                        {paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                </div>
            </div>
        </section>
    )
}
