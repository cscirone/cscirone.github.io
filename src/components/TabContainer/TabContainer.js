function TabContainer({ children, className, type }) {

    if ( type === 'vertical' ) {
        return (
            <div className={`flex flex-col gap-6 ${className}`}>
                {children}
            </div>
        );
    }

    return (
        <div className={`flex flex-row gap-6 flex-1 ${className}`}>
            {children}
        </div>
    );
}

export default TabContainer;