import Head from 'next/head';



function Index ({ data }) {
    const { name, title, description } = data;

    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <h1>dynamic Head - {name}</h1>
        </div>
    );
};

export default Index;


export async function getServerSideProps() {
    return {
        props: {
            data: {
                name: 'khashayar dynamic train',
                title: 'ssr page',
                description: 'a dynamic data to pass to the head'
            }
        }
    };
}