import BeneficiosH from './beneficios';
import BenefitsSection from './moreBeneficios';
import Principal from './principal'
import Usabilidad from './usabilidad';

const Home = () => {
    return (
        <>
            <Principal />
            <Usabilidad />
            <BeneficiosH />
            <BenefitsSection />
        </>
    )
}

export default Home;