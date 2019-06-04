import Link from 'next/link';
import Count from '../components/count';

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

function Home() {
    return (
        <div style={layoutStyle}>
            <Link href="/teste">
                <a>teste</a>
            </Link>
            <Count />
        </div>
    );
};

export default Home;