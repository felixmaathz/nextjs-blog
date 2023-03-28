import Head from 'next/head';
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import {getSortedPostsData} from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({allPostsData}) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>Yo, välkommen till Jannes spaningar! Jag är Janne, en 50-årig lantis som jobbar på bruket. Här i min
                    blogg delar jag med mig av mina tankar och funderingar om allt möjligt. Följ med mig när jag
                    utforskar livet på landet och tar upp allt från fiske och jakt till småstadspolitik och nya recept.
                    Låt oss hänga och ha lite kul tillsammans!</p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>

                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({id, date, title}) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>{title}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}