'use client';

const socials = [
  { name: 'GitHub', url: 'https://github.com/IndalAwalaikal', icon: '🐙' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: '💼' },
  { name: 'Email', url: 'mailto:indalawalaikal05@gmail.com', icon: '✉️' },
];

export default function SocialLinks() {
  return (
    <div className="flex space-x-6 mt-6">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-2xl hover:scale-110 transition"
          aria-label={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
}