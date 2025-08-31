import AOS from 'aos';

const aos = () => {
    if (typeof window !== 'undefined') {
        try {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            });
        } catch (error) {
            console.error('Error initializing AOS:', error);
        }
    }
}

export default aos;