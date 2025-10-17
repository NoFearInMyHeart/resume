import Script from "next/script";

const StatisticsScript = () => {
    return (
        <>
            <Script
                id="cnzz-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        var _czc = _czc || [];
                        (function () {
                            var um = document.createElement("script");
                            um.src = "https://s9.cnzz.com/z.js?id=1281438683&async=1";
                            var s = document.getElementsByTagName("script")[0];
                            s.parentNode.insertBefore(um, s);
                        })();
                    `,
                }}
            />
        </>
    );
};

export default StatisticsScript;
