import React from 'react';
import HeroSection from '../components/sections/HeroSection/HeroSection';
import AboutSection from '../components/sections/AboutSection/AboutSection';
import StatsSection from '../components/sections/StatsSection/StatsSection';
import KeyThemesSection from '../components/sections/KeyThemesSection/KeyThemesSection';
import SpeakersSection from '../components/sections/SpeakersSection/SpeakersSection';
import PricingSection from '../components/sections/PricingSection/PricingSection';
import SponsorsSection from '../components/sections/SponsorsSection/SponsorsSection';
import PreviousConferenceSection from '../components/sections/PreviousConferenceSection/PreviousConferenceSection';
import UniversitiesMarquee from '../components/sections/UniversitiesMarquee/UniversitiesMarquee';
import '../pages_orig/Home/Home.css';

export const metadata = {
    title: 'Home | CYBERQUANTUMSUMMIT2026',
    description: 'CYBERQUANTUMSUMMIT2026 – INTERNATIONAL CONFERENCE ON CYBERSECURITY & QUANTUM COMPUTING. Submit abstracts and register now.',
    alternates: {
        canonical: 'https://cyberquantumsummit.com/',
    }
};

export default function Home() {
    return (
        <div className="home-page">
            <HeroSection />
            <UniversitiesMarquee />
            <AboutSection />
            <StatsSection />
            <SpeakersSection showViewAll={true} />
            <PricingSection />
            <KeyThemesSection showLearnMore={true} />
            <PreviousConferenceSection />
            <SponsorsSection />
        </div>
    );
}
