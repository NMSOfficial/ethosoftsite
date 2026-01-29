export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Medical' | 'Education' | 'Core AI';
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  email?: string;
  linkedin?: string;
  image?: string; // Filename if exists
  group: 'advisor' | 'leadership' | 'team';
}

export interface Achievement {
  id: string;
  title: string;
  image: string;
}

export interface Partner {
  id: string;
  name: string;
  logo: string;
}

export interface NavItem {
  label: string;
  href: string;
}