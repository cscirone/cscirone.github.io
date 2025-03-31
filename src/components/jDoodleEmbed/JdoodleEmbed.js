import React, { useEffect } from 'react';

/*
<div data-pym-src="https://www.jdoodle.com/embed/v1/7ff473bfc9a2a15a"></div>
<script src="https://www.jdoodle.com/assets/jdoodle-pym.min.js" type="text/javascript"> </script>
*/

function JdoodleEmbed() {
    const jdoodleCode = `
        <div data-pym-src="https://www.jdoodle.com/embed/v1/7ff473bfc9a2a15a"></div>
    `;

    useEffect(() => {
        // Re-run the script after the component mounts
        const script = document.createElement('script');
        script.src = 'https://www.jdoodle.com/assets/jdoodle-pym.min.js';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div dangerouslySetInnerHTML={{ __html: jdoodleCode }} />
    )
}

export default JdoodleEmbed;