import React from 'react'
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import './RecentWorks.css'

const RecentWorks = () => {
    const itemData = [
        {
            img: 'https://elid.com.ph/wp-content/uploads/2022/09/street-camera-surveillance-cctv-street-2021-10-20-02-33-39-utc.jpg',
            title: 'Bed',
        },
        {
            img: 'https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F007%2F924%2Fred-mild-steel-body-co2-fire-extinguisher-for-home-use-8-kg-878.jpg&w=384&q=15',
            title: 'Books',
        },
        {
            img: 'https://5.imimg.com/data5/SELLER/Default/2020/9/SJ/WK/AR/6388163/brightsun-solar-power-panel-500x500.jpg',
            title: 'Sink',
        },
        {
            img: 'https://www.pmmag.com/ext/resources/Issues/2020/July/job-site-productivity.jpg?1593640536',
            title: 'Kitchen',
        },
        {
            img: 'https://st.depositphotos.com/57300762/55157/i/450/depositphotos_551574884-stock-photo-electrician-engineer-uses-multimeter-test.jpg',
            title: 'Blinds',
        },
        {
            img: 'https://c0.wallpaperflare.com/preview/633/354/561/lamp-post-turned-off.jpg',
            title: 'Chairs',
        },
        {
            img: 'https://st.depositphotos.com/2026267/3810/i/600/depositphotos_38109265-stock-photo-road-construction.jpg',
            title: 'Laptop',
        },
        {
            img: 'https://5.imimg.com/data5/SELLER/Default/2021/2/QJ/JS/XY/9375503/cng-gas-pipeline-fitting-service-2-500x500.jpg',
            title: 'Doors',
        },
        {
            img: 'https://plumbingsales.com.au/media/wysiwyg/stainless-toilet.jpeg',
            title: 'Coffee',
        },
        {
            img: 'https://4.imimg.com/data4/VU/PM/MY-7772263/solar-street-lighting-system-500x500.jpg',
            title: 'Storage',
        },
        {
            img: 'https://comarbois.com/wp-content/uploads/2022/03/etancheite-terrassse.jpg',
            title: 'Candle',
        },
        // {
        //     img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        //     title: 'Coffee table',
        // },
    ];
    return (
        <div className="recent-projects-section">
            <h2>our recent projects</h2>
            <p>Explore our portfolio of recent projects to see firsthand the quality and diversity of our work. From residential renovations to large-scale commercial developments, each project showcases our commitment to excellence and attention to detail. Whether you're seeking inspiration for your own project or simply curious about our capabilities, our portfolio offers a glimpse into the expertise and craftsmanship we bring to every endeavor. Browse through our recent projects below and envision the possibilities for your next venture.</p>
            <Box sx={{
                height: 500, overflowY: 'scroll', scrollbarWidth: 'none', // Hide scrollbar for Firefox
                '-ms-overflow-style': 'none', // Hide scrollbar for IE and Edge
                '&::-webkit-scrollbar': { // Style scrollbar for Webkit browsers (Chrome, Safari)
                    display: 'none', // Hide scrollbar for Webkit browsers
                },
                '@media (max-width: 1280px)': {
                    width: '100%',
                }
            }}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Box>
        </div>
    )
}

export default RecentWorks
