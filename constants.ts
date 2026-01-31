import { Project, TeamMember, Achievement, Partner, NavItem } from './types';

// Asset Base URLs
export const LOGO_BASE_URL = "https://ethosoft.org/logolar";
export const TEAM_IMG_BASE_URL = "https://ethosoft.org/kisiler";
export const ACHIEVEMENT_IMG_BASE_URL = "https://ethosoft.org/basarilarimiz";
export const PARTNER_IMG_BASE_URL = "https://ethosoft.org/partnerlerimiz";

// Logos
export const LOGOS = {
  iconSalmon: `${LOGO_BASE_URL}/ethos-02.png`,
  fullColor: `${LOGO_BASE_URL}/ethos-03.png`,
  iconWhite: `${LOGO_BASE_URL}/ethos-05.png`,
  fullWhite: `${LOGO_BASE_URL}/ethos-06.png`,
};

// Navigation
export const NAV_ITEMS: NavItem[] = [
  { label: 'Projeler', href: '#projects' },
  { label: 'Ekip', href: '#team' },
  { label: 'Başarılar', href: '#achievements' },
  { label: 'Partnerler', href: '#partners' },
  { label: 'Blog', href: '#blog' },
  { label: 'İletişim', href: '#contact' },
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    id: 'eeg2video',
    title: 'EEG2Video',
    description: 'EEG sinyalleri aracılığıyla insanın hayal ettiği sekansları yapay zeka aracılığıyla videoya çeviren proje.',
    category: 'Core AI'
  },
  {
    id: 'epilepsi',
    title: 'Epilepsi Erken Teşhis',
    description: 'Epilepsi hastalarına yönelik erken teşhis ve uyarı sistemi. EEG sinyallerini analiz ederek nöbet öncesi uyarı verir.',
    category: 'Medical'
  },
  {
    id: 'protein',
    title: 'Protein Mutasyon Analizi',
    description: 'Proteinlerde meydana gelen mutasyonların hastalıklara etkisini analiz eden multimodal yapay zeka sistemi.',
    category: 'Medical'
  },
  {
    id: 'kalp',
    title: 'Kalp Hastalıkları Tanısı',
    description: 'Klinik veriler ve EKG sinyalleri ile 10’dan fazla kalp hastalığını otomatik tespit eden karar destek sistemi.',
    category: 'Medical'
  },
  {
    id: 'goz',
    title: 'Göz Hastalıkları Tespiti',
    description: 'Fundus ve OCT görüntüleri ile 20 farklı göz hastalığının otomatik sınıflandırılması ve lezyon tespiti.',
    category: 'Medical'
  },
  {
    id: 'gogus',
    title: 'Göğüs X-Ray Analizi',
    description: 'Göğüs X-ray görüntülerinden 10 farklı hastalığın tespiti, lokalizasyonu ve otomatik radyoloji raporu üretimi.',
    category: 'Medical'
  },
  {
    id: 'beyin',
    title: 'Multimodal Beyin Analizi',
    description: 'MR, BT ve EEG modaliteleri ile 5 farklı beyin hastalığının doğru ve güvenilir tespiti.',
    category: 'Medical'
  },
  {
    id: 'solvio',
    title: 'Solvio',
    description: 'İngilizce sınavlarının otomatik okunması, değerlendirilmesi ve öğrencilere kişiselleştirilmiş geri bildirim sunulması.',
    category: 'Education'
  }
];

// Team Data
export const TEAM: TeamMember[] = [
  {
    id: 'remzi',
    name: 'Remzi Öz',
    role: 'Takım Danışmanı',
    email: 'remzioz@ethosoft.org',
    linkedin: 'https://www.linkedin.com/in/remzi-öz-29687b1b3/',
    image: 'remzi.png',
    group: 'advisor'
  },
  {
    id: 'omer',
    name: 'Ömer Faruk Aksoy',
    role: 'Takım Kaptanı, YZ & Veri Mühendisi',
    email: 'omer@ethosoft.org',
    linkedin: 'https://www.linkedin.com/in/ömerfarukaksoy/',
    image: 'omer.png',
    group: 'advisor'
  },
  {
    id: 'nedim',
    name: 'Nedim Mutlu Sezer',
    role: 'Teknoloji Kaptanı, YZ & Veri Mühendisi',
    email: 'nedim@ethosoft.org',
    linkedin: 'https://www.linkedin.com/in/nmsofficial/',
    image: 'nedim.png',
    group: 'leadership'
  },
  {
    id: 'yagiz',
    name: 'Yağız Ekrem Dalar',
    role: 'PR Kaptanı, YZ & Veri Mühendisi',
    email: 'ekrem@ethosoft.org',
    linkedin: 'https://www.linkedin.com/in/yagizekremdalar/',
    image: 'yagiz.png',
    group: 'leadership'
  },
  {
    id: 'rifat',
    name: 'Ahmet Rıfat Öztürk',
    role: 'Strateji Kaptanı, YZ & Veri Mühendisi',
    email: 'ahmetrifat@ethosoft.org',
    linkedin: 'https://www.linkedin.com/in/ahmet-r%C4%B1fat-%C3%B6zt%C3%BCrk-161896293/',
    image: 'rifat.png',
    group: 'leadership'
  },
  {
    id: 'arda',
    name: 'Feyzi Arda Salihoğlu',
    role: 'Strateji Kaptanı, YZ & Veri Mühendisi',
    email: 'feyziarda.salihoglu@ethos.org',
    linkedin: 'https://www.linkedin.com/in/feyzi-arda-saliho%C4%9Flu-579057386/',
    image: 'arda.png',
    group: 'leadership'
  },
  {
    id: 'yusuf',
    name: 'Yusuf Cidik',
    role: 'Altyapı',
    email: 'cidik@ethosoft.org',
    linkedin: 'https://www.linkedin.com/in/yusuf-cidik-41471a31a/',
    group: 'team'
  },
  {
    id: 'alper',
    name: 'Alper Safa Dede',
    role: 'Altyapı',
    email: 'alpersafadede@ethosoft.org',
    linkedin: 'https://www.linkedin.com/in/alper-safa-dede-40a702315/',
    group: 'team'
  },
  {
    id: 'ugur',
    name: 'Uğur Ali Şahinoğlu',
    role: 'Altyapı',
    email: 'ugrli@ethosoft.org',
    linkedin: 'http://www.linkedin.com/in/u%C4%9Fur-ali-%C5%9Fahino%C4%9Flu-823707387',
    group: 'team'
  },
  {
    id: 'alaattin',
    name: 'Alaattin Ömer Çavuş',
    role: 'Altyapı',
    email: 'omercavus@ethosoft.org',
    linkedin: 'https://www.linkedin.com/in/%C3%B6mer-%C3%A7avu%C5%9F-a80b95389/',
    group: 'team'
  },
  {
    id: 'seza',
    name: 'Yusuf Seza Kılınç',
    role: 'Altyapı',
    email: 'yusufsezakilinc@ethosoft.org',
    linkedin: 'https://www.linkedin.com/in/yusuf-seza-kilin%C3%A7-1b3b02389/',
    group: 'team'
  },
  {
    id: 'hamza',
    name: 'Hamza Yakup Yılmaz',
    role: 'Altyapı',
    email: 'hamzayakupyilmaz@ethosoft.org',
    linkedin: 'https://www.linkedin.com/in/hamza-yakup-y%C4%B1lmaz-a958a2384/',
    group: 'team'
  }
];

// Achievements Data
export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'datamedx',
    title: 'İstinye Üniversitesi DataMedX Hackathon Şampiyonluğu',
    image: 'datamedx.jpeg'
  },
  {
    id: 'mostra',
    title: 'İTÜ Mostra Hackathon Jüri Özel Ödülü ve Uyumsoft Stajı',
    image: 'mostra.jpeg'
  },
  {
    id: 'teknofest',
    title: 'Teknofest Sağlıkta YZ Yarışması Türkiye 3.lüğü',
    image: 'teknofest.jpeg'
  },
  {
    id: 'basaksehir',
    title: 'Başakşehir Living Lab Yarışması Türkiye 2.liği',
    image: 'basaksehir.jpeg'
  },
  {
    id: 'eucodeweek',
    title: 'EUCodeWeek Hackathon Türkiye 1.liği',
    image: 'eucodeweek.jpeg'
  }
];

// Partners Data
export const PARTNERS: Partner[] = [
  { id: 'pertev', name: 'Pertevniyal Lisesi', logo: 'pertev.png' },
  { id: 'cgm', name: 'ODTÜ MEMS Merkezi', logo: 'mems.png' },
  { id: 'gsb', name: 'Gençlik ve Spor Bakanlığı', logo: 'gsb.png' },
  { id: 'ag', name: 'Asrın Global', logo: 'ag.png' },
];

export const CONTACT_INFO = {
  email: 'merhaba@ethosoft.org',
  linkedin: 'https://www.linkedin.com/company/ethos-ai-team/'
};