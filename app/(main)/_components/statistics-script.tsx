import Script from "next/script";

const StatisticsScript = () => {
    return (
        <>
            <Script
                id="cnzz-analytics"
                strategy="afterInteractive"
                src="https://v1.cnzz.com/z_stat.php?id=1281418424&web_id=1281418424"
            />
        </>
    );
};

export default StatisticsScript;
