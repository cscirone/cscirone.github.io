import Button from '../components/button/Button';

function TestPage() {
    return (
        <>
            <title>Test Page</title>

            <div className="flex flex-row gap-2">
                <Button type="primary" text="Button" icon="fa-solid fa-plus"/>
                <Button type="outline" text="Button" icon="fa-solid fa-plus" />
            </div>
        </>
    );
}

export default TestPage;