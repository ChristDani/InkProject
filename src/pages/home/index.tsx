import BeneficiosH from './beneficios';
import BenefitsSection from './moreBeneficios';
import Principal from './principal'
// import Usabilidad from './usabilidad';
import UsabilidadScroll from './usabilidadScroll';

const Home = () => {
    return (
        <>
            <Principal />
            <UsabilidadScroll />
            <BeneficiosH />
            <BenefitsSection />
        </>
    )
}

export default Home;