import Banner from '../components/Banner';
import Categoria from '../components/Categoria';


const Home = () => {
    return (
        <>
            <Banner />
            <Categoria categoria="Front end" color="#6BD1FF" linkImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWfDtUF_HGoNkOwNY-k0hRxG4GAyDeVfqTtw"/>
            <Categoria categoria="Back end" color="#00C86F" linkImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWfDtUF_HGoNkOwNY-k0hRxG4GAyDeVfqTtw"/>
            <Categoria categoria="Innovación y gestión" color="#FE8C2A" linkImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWfDtUF_HGoNkOwNY-k0hRxG4GAyDeVfqTtw"/>
        </>
    )
}

export default Home