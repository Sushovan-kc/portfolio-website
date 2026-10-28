export const navigation = [
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
]

export const skills = [
  ['Programming', ['Python', 'NumPy', 'Pandas', 'OOP', 'Scripting']],
  ['Machine learning', ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep learning', 'CNNs']],
  ['Computer vision', ['OpenCV', 'Image preprocessing', 'Segmentation', 'Medical imaging']],
  ['Backend & deployment', ['Django', 'Flask', 'REST APIs', 'Git']],
]

export const projects = [
    {
    label: 'Featured / medical AI',
    title: 'Brain hemorrhage segmentation',
    description: 'A deep learning system for segmenting brain hemorrhages from CT scans, comparing supervised U-Net and U-Net++ models with self-supervised masked autoencoders to improve segmentation performance and reduce dependence on labeled data. Includes a web interface for visualizing and comparing model predictions.',
    tech: ['Python', 'PyTorch', 'U-Net', 'Masked Autoencoders', 'Medical imaging', 'FastAPI', 'React'],
    image: '/images/projects/brain_hemmorhage.png',
    href: 'YOUR_MAJOR_PROJECT_GITHUB_URL',
    },
  {
    label: 'Featured / medical AI',
    title: 'Cataract detection & segmentation',
    description: 'An AI-powered system for detecting and segmenting cataracts from eye images, pairing a Python inference pipeline with a practical web interface.',
    tech: ['Python', 'Deep learning', 'Medical imaging', 'Flask'],
    image: '/images/projects/cataract_detection.jpg',
    href: 'https://github.com/Sushovan-kc/Minor-project',
  },
  {
    label: 'Computer graphics',
    title: 'Maze generator & solver',
    description: 'An interactive DFS simulation that generates mazes in real time, animates pathfinding, and lets users configure dimensions and tile sizes.',
    tech: ['Python', 'Pygame', 'DFS algorithm', 'Visualization'],
    image: '/images/projects/maze_solver.jpg',
    href: 'https://github.com/Sushovan-kc/computer-graphics/tree/main/computer%20graphics/maze',
  },
  {
    label: 'Web development',
    title: 'Personal portfolio website',
    description: 'A responsive React portfolio rebuilt with reusable components and a single-page route layout. It combines Tailwind CSS styling, light/dark theme persistence, React Router navigation, Framer Motion reveals, lazy-loaded project imagery, and custom canvas particle backgrounds that respond to the cursor.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Framer Motion', 'Canvas particles'],
    image: '/images/projects/portfolio.jpg',
    href: 'https://github.com/Sushovan-kc',
  },
]

export const education = [
  ['Education', 'Advanced College of Engineering and Management', 'Bachelor of Engineering · April 2021 – Present'],
  ['Specialization', 'Deep learning & computer vision', 'U-Net, TransUNet, MAE, CNNs · Medical image analysis'],
  ['Track record', 'Production AI systems', 'End-to-end ML pipelines · Django/Flask deployment'],
]
