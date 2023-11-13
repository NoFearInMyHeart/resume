const MainLayout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className='relative z-0 bg-primary'>
            {children}
        </div>
    );
};

export default MainLayout;
