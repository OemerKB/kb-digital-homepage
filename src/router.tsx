import { createBrowserRouter, Navigate } from 'react-router-dom';
import App from './App';
import { BlogPage } from './components/pages/BlogPage';
import { BlogPostPage } from './components/pages/BlogPostPage';
import { ReferenzenPage } from './components/pages/ReferenzenPage';
import { CaseStudyPage } from './components/pages/CaseStudyPage';
import { KontaktPage } from './components/pages/KontaktPage';
import { GastronomiePage } from './components/pages/GastronomiePage';
import { HandwerkBauPage } from './components/pages/HandwerkBauPage';
import { KosmetikPage } from './components/pages/KosmetikPage';
import { ConsultingPage } from './components/pages/ConsultingPage';
import { CoachesPage } from './components/pages/CoachesPage';
import { ECommercePage } from './components/pages/ECommercePage';
import { WhiteLabelPage } from './components/pages/WhiteLabelPage';
import { AgenturenPage } from './components/pages/AgenturenPage';
import { ImpressumPage } from './components/pages/ImpressumPage';
import { DatenschutzPage } from './components/pages/DatenschutzPage';
import { BranchenweltPage } from './components/pages/BranchenweltPage';
import { MarketingPage } from './components/pages/marketing/MarketingPage';
import { GoogleAdsPage } from './components/pages/marketing/GoogleAdsPage';
import { SeoPage } from './components/pages/marketing/SeoPage';
import { SocialMediaPage } from './components/pages/marketing/SocialMediaPage';
import { OrganicSocialPage } from './components/pages/marketing/OrganicSocialPage';
import { LocalSeoPage } from './components/pages/marketing/LocalSeoPage';
import { PerformanceMarketingPage } from './components/pages/marketing/PerformanceMarketingPage';
import { StrategyConsultingPage } from './components/pages/marketing/StrategyConsultingPage';
import { ServicesPage } from './components/pages/services/ServicesPage';
import { WebdesignPage } from './components/pages/services/WebdesignPage';
import { WebentwicklungPage } from './components/pages/services/WebentwicklungPage';
import { OnlineShopPage } from './components/pages/services/OnlineShopPage';
import { MobileDevelopmentPage } from './components/pages/services/MobileDevelopmentPage';
import { KiAutomationPage } from './components/pages/services/KiAutomationPage';
import { PrintPage } from './components/pages/services/PrintPage';
import { BeratungPage } from './components/pages/services/BeratungPage';
import { CorporateDesignPage } from './components/pages/services/CorporateDesignPage';
import { ExpressWebdesignPage } from './components/pages/services/ExpressWebdesignPage';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App darkMode={false} setDarkMode={() => {}} />,
  },
  {
    path: "/blog",
    element: <BlogPage />,
  },
  {
    path: "/blog/:slug",
    element: <BlogPostPage />,
  },
  {
    path: "/referenzen",
    element: <ReferenzenPage />,
  },
  {
    path: "/referenzen/:slug",
    element: <CaseStudyPage />,
  },
  {
    path: "/kontakt",
    element: <KontaktPage />,
  },
  {
    path: "/branchenwelt/gastronomie",
    element: <GastronomiePage />,
  },
  {
    path: "/branchenwelt/handwerk-bau",
    element: <HandwerkBauPage />,
  },
  {
    path: "/branchenwelt/kosmetik",
    element: <KosmetikPage />,
  },
  {
    path: "/branchenwelt/consulting",
    element: <ConsultingPage />,
  },
  {
    path: "/branchenwelt/coaches",
    element: <CoachesPage />,
  },
  {
    path: "/branchenwelt/e-commerce",
    element: <ECommercePage />,
  },
  {
    path: "/branchenwelt/white-label",
    element: <WhiteLabelPage />,
  },
  {
    path: "/branchenwelt/agenturen",
    element: <AgenturenPage />,
  },
  {
    path: "/branchenwelt",
    element: <BranchenweltPage />,
  },
  {
    path: "/impressum",
    element: <ImpressumPage />,
  },
  {
    path: "/datenschutz",
    element: <DatenschutzPage />,
  },
  // Marketing Routes
  {
    path: "/marketing",
    element: <MarketingPage />,
  },
  {
    path: "/marketing/google-ads",
    element: <GoogleAdsPage />,
  },
  {
    path: "/marketing/seo",
    element: <SeoPage />,
  },
  {
    path: "/marketing/social-media",
    element: <SocialMediaPage />,
  },
  {
    path: "/marketing/organic-social",
    element: <OrganicSocialPage />,
  },
  {
    path: "/marketing/local-seo",
    element: <LocalSeoPage />,
  },
  {
    path: "/marketing/performance",
    element: <PerformanceMarketingPage />,
  },
  {
    path: "/marketing/strategy",
    element: <StrategyConsultingPage />,
  },
  // Services Routes
  {
    path: "/services",
    element: <ServicesPage />,
  },
  {
    path: "/services/webdesign",
    element: <WebdesignPage />,
  },
  {
    path: "/services/webentwicklung",
    element: <WebentwicklungPage />,
  },
  {
    path: "/services/online-shop",
    element: <OnlineShopPage />,
  },
  {
    path: "/services/mobile-development",
    element: <MobileDevelopmentPage />,
  },
  {
    path: "/services/ki-automation",
    element: <KiAutomationPage />,
  },
  {
    path: "/services/print",
    element: <PrintPage />,
  },
  {
    path: "/services/beratung",
    element: <BeratungPage />,
  },
  {
    path: "/services/corporate-design",
    element: <CorporateDesignPage />,
  },
  {
    path: "/services/express-webdesign",
    element: <ExpressWebdesignPage />,
  },
  // Catch all route - redirect to home
  {
    path: "*",
    element: <Navigate to="/" replace />,
  }
]);