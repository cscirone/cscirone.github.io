import TabPanelContent from "../TabPanelContent";
import ResponsiveIFrame from "../../responsiveIframe/ResponsiveIFrame";

import { Select, MenuItem } from "@mui/material";
import Button from "@mui/material/Button";
import LinkIcon from "@mui/icons-material/Link";

import { useState } from "react";

function IgniteCSTabPanel() {

    const learningMaterials = [
        {
            label: 'uCreate Lesson Plan',
            src: 'https://docs.google.com/presentation/d/e/2PACX-1vTJD4ETFFZfXYkRbbmeUZqi3QtMRBQU_u5K2ibBph9JG4Oj29x67bfvxiROGSp86xdK-LTLJfH9bpY8/pubembed?start=false&loop=false&delayms=3000',
        }, 
        {
            label: 'Rock, Paper, Scissors Tutorial',
            src: 'https://docs.google.com/document/d/e/2PACX-1vSDdpJ3j1tsBN1EeGJTy_7pDbnlnYzMQXScM7h28fHnxlnSX5uSPF9StOSQmnQEbg/pub?embedded=true',
        },
        {
            label: 'Hello, World! Tutorial',
            src: 'https://docs.google.com/document/d/e/2PACX-1vQr106Mp_eya_5Kf1VfB5ZPLgAkW4LMXodYdnEZ3RhPoBqkJg-aXhfxzYooH6XRmw/pub?embedded=true',
        }
    ];

    const [selectedMaterial, setSelectedMaterial] = useState(learningMaterials[0].label);

    return (
        <TabPanelContent>
            <p>
                The igniteCS program was a Google grant program wherein students aimed to spark interest in Computer Science in their local communities. 
                I co-led a team of 10 students through the planning and drafting of a grant proposal to the igniteCS Google program. Our grant proposal earned us $5700 of funding, which we used to fund a Unity game development workshop at two different high schools in the Las Cruces area. 
                Our students learned the basics of Unity game development through the assisted implementation and manipulation of Unity tutorial games in C# using the Unity Engine IDE. 
                The projects that were prominently featured in the program included a basic "Hello, World!" tutorial, "Rock, Paper, Scissors", "2D UFO Game", "2D Rouge-like Survival", and "Breakout". 
                The program concluded with a survey which showed that our mixed demographic of students, all of whom had a collective low interest in Computer Science initially, had grown their interest and excitement regarding programming and Computer Science significantly.
            </p>

            <p>
                As one of two leaders of the program, I was tasked with drafting the budget for the grant proposal.
                I came up with an initial budget of $4,950, which sought to cover the cost of paying the student workers, and prizes for the program participants.
            </p>

            <div className="flex flex-col gap-4">
                <a href={learningMaterials.find(material => material.label === selectedMaterial).src} target="_blank" rel="noopener noreferrer" className="self-end">
                    <Button variant="outlined">
                        <LinkIcon />
                        View Material
                    </Button>
                </a>
                <ResponsiveIFrame src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTz1VkE2K90E31X8_x7b-D1WGN-8-UZF5NInw0_UjuupYqyNU5cKA-UxYBjnIX2WA/pubhtml?widget=true&amp;headers=false" />
            </div>
            
            <p>
                As the team member most familiar with Unity game development, I was responsible for the compilation of the learning materials.
                I created the 5 day lesson plan, and gathered tutorials from the Unity Learning website.
                In order to more subtly ease the students into the core concepts of programming, I designed a "Hello, World!" tutorial, and a "Rock, Paper, Scissors" tutorial.
                The rest of the tutorials were chosen from the Unity Learning website, and the students were allowed to choose between any of them for their final project.
            </p>

            <div className="flex flex-col gap-4">

                <Select
                    value={selectedMaterial}
                    onChange={(e) => setSelectedMaterial(e.target.value)}
                    style={{ marginBottom: '1rem' }}
                >
                    {learningMaterials.map((material) => (
                        <MenuItem key={material.label} value={material.label}>
                            {material.label}
                        </MenuItem>
                    ))}
                </Select>

                <a href={learningMaterials.find(material => material.label === selectedMaterial).src} target="_blank" rel="noopener noreferrer" className="self-end">
                    <Button variant="outlined">
                        <LinkIcon />
                        View Material
                    </Button>
                </a>

                <ResponsiveIFrame 
                    src={learningMaterials.find(material => material.label === selectedMaterial).src} 
                />

            </div>
            
        </TabPanelContent>
    );
}

export default IgniteCSTabPanel;