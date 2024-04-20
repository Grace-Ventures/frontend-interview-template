const clientData = [
    {
        name: "TechSolutions",
        id: 'ts',
        description: "Leading provider of innovative tech solutions for businesses of all sizes.",
        address: {
            city: 'New York',
            state: 'NY',
            zipCode: '10001',
        }
    },
    {
        name: "Global Logistics",
        id: 'gl',
        description: 'Offering comprehensive logistics solutions for international shipping and supply chain management.',
        address: {
            city: 'Springfield',
            state: 'IL',
            zipCode: '62701'
        }
    },
    {
        name: "HealthWise Pharmaceuticals",
        id: 'hp',
        description: 'Dedicated to developing cutting-edge pharmaceuticals for improving global health.',
        address: {
            city: 'Portland',
            state: 'ME',
            zipCode: '04101'
        }
    },
    {
        name: "SilverSpoon Catering",
        id: 'sc',
        description: 'Providing exquisite catering services for weddings, corporate events, and private parties.',
        address: {
            city: 'Austin',
            state: 'TX',
            zipCode: '78701'
        }
    },
    {
        name: "Sunrise Energy",
        id: 'se',
        description: 'Leading provider of renewable energy solutions for residential and commercial properties.',
        address: {
            city: 'Denver',
            state: 'CO',
            zipCode: '80201'
        }
    },
    {
        name: "Creative Minds",
        id: 'cm',
        description: 'Innovative advertising agency specializing in digital marketing and brand development.',
        address: {
            city: 'Orlando',
            state: 'FL',
            zipCode: '32801'
        }
    },
    {
        name: "BlueSky Aviation",
        id: 'ba',
        description: 'Offering a wide range of aviation services including aircraft maintenance, leasing, and charter.',
        address: {
            city: 'Seattle',
            state: 'WA',
            zipCode: '98101'
        }
    },
    {
        name: "Golden Harvest",
        id: 'gh',
        description: 'Family-owned farm producing high-quality fruits and vegetables for local markets.',
        address: {
            city: 'Nashville',
            state: 'TN',
            zipCode: '37201'
        }
    },
];

export async function getClientData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.01) {
                reject();
            } else {
                resolve(clientData);
            }
        }, 500)
    })
}