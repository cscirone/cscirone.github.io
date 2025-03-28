import Button from '../components/button/Button';

function TestPage() {
    return (
        <div className="min-h-[200vh]">
            <title>Test Page</title>

            <div className="flex flex-row gap-2">
                <Button type="primary" text="Primary" icon="fa-solid fa-plus"/>
                <Button type="secondary" text="Secondary" icon="fa-solid fa-plus" />
                <Button type="tertiary" text="Tertiary" icon="fa-solid fa-plus" />
                <Button type="outline" text="Outline" icon="fa-solid fa-plus" />
            </div>
        </div>
    );
}

export default TestPage;