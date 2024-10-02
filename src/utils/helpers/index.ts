const loacl = [
    {
        id: 1,
        imagePath: 'https://drive.google.com/thumbnail?id=19ggDJEYxtxlNXDVn5qBDFbQdOLK7RVVY',
        isFemale: false
    },
    {
        id: 2,
        imagePath: 'https://drive.google.com/thumbnail?id=1oRsnLPz33xb_cHtC4KLVkcS9hOiRjgOJ',
        isFemale: true
    }
];

const FEMALE_IMAGES = {
    SKIN: [
        {
            ID: 0,
            source: 'https://drive.google.com/thumbnail?id=1yLVy9IoZ8D-M_Vpr-2BVAZfHqOs3wtmP',
            title: '1',
        },
        {
            ID: 1,
            source: 'https://drive.google.com/thumbnail?id=1NBKHtTB39xDescbPB0lMkR5oUZTzwTXd',
            title: '2'
        },
        {
            ID: 2,
            source: 'https://drive.google.com/thumbnail?id=1ABHyH9lBkWdYnAkJVEd4J50d39e7XnEo',
            title: '3'
        },
    ],
    SKIN_TONE: [
        {
            ID: '002',
            Name: 'Clara',
            Age: 'Youth',
            Gender: 'Female',
            Skin: 'Fair',
            source: 'https://drive.google.com/thumbnail?id=1oRsnLPz33xb_cHtC4KLVkcS9hOiRjgOJ',
        },
        {
            ID: '004',
            Name: 'Mia',
            Age: 'Youth',
            Gender: 'Female',
            Skin: 'Medium',
            source: 'https://drive.google.com/thumbnail?id=1YDSfbeHBttPSRiiGKlaSuuTAChCBLw3x',
        },
        {
            ID: '003',
            Name: 'Jamila',
            Age: 'Youth',
            Gender: 'Female',
            Skin: 'Deep',
            source: 'https://drive.google.com/thumbnail?id=1OzZianpJ3aUHmSI-o1hmyuc8gdjVf_EF',
        },
        {
            ID: '042',
            Name: 'Lavanya',
            Age: 'Youth',
            Gender: 'Female',
            Skin: 'Tanned',
            source: 'https://drive.google.com/thumbnail?id=1B8Hiz22nOPdZSJaGbSfkdoY40ybRQtN1',
        },
        {
            ID: '001',
            Name: 'Antonia',
            Age: 'Youth',
            Gender: 'Female',
            Skin: 'Olive',
            source: 'https://drive.google.com/thumbnail?id=19q1mvVZ_ys6Vv4F7KzMsVR5XBpPkous9',
        },
    ],
    AGE: [
        {
            ID: '025',
            Name: 'Amy',
            Age: 'Children',
            Gender: 'Female',
            Skin: 'Fair',
            source: 'https://storage-web.pixocial.com/vmake-prod/~/static/images/5f178a55f4615779383f.jpg'
        },
        {
            ID: '035',
            Name: 'Valeria',
            Age: 'Teen',
            Gender: 'Female',
            Skin: 'Olive',
            source: 'https://storage-web.pixocial.com/vmake-prod/~/static/images/991ed613b9300c14be17.jpg'
        },
        {
            ID: '001',
            Name: 'Antonia',
            Age: 'Youth',
            Gender: 'Female',
            Skin: 'Olive',
            source: 'https://storage-web.pixocial.com/vmake-prod/~/static/images/5cf712188a2e16949c50.jpg'
        },
        {
            ID: '009',
            Name: 'Camila',
            Age: 'Middle-Aged',
            Gender: 'Female',
            Skin: 'Olive',
            source: 'https://storage-web.pixocial.com/vmake-prod/~/static/images/ec50edfc5b9cf45e69a6.jpg'
        },
        {
            ID: '017',
            Name: 'Valentina',
            Age: 'Senior',
            Gender: 'Female',
            Skin: 'Olive',
            source: 'https://storage-web.pixocial.com/vmake-prod/~/static/images/08c59376e3a291162ae7.jpg'
        },
    ]
};

const MALE_IMAGES = {
    SKIN: [
        {
            ID: 0,
            source: 'https://drive.google.com/thumbnail?id=15DLNewNrA1K8F7GhAYkQUudtDZp7gCuB',
            title: '1'
        },
        {
            ID: 1,
            source: 'https://drive.google.com/thumbnail?id=1GHd04qAAyaEl4S-NrpSfZE_fEEHf9ksK',
            title: '2'
        },
        {
            ID: 2,
            source: 'https://drive.google.com/thumbnail?id=1fjrJQ6Arxop5_BbnebVfH0-PKsOz6YUY',
            title: '3'
        },
    ],
    SKIN_TONE: [
        {
            ID: '006',
            Name: 'Henry',
            Age: 'Youth',
            Gender: 'Male',
            Skin: 'Fair',
            source: 'https://drive.google.com/thumbnail?id=19ggDJEYxtxlNXDVn5qBDFbQdOLK7RVVY',
        },
        {
            ID: '008',
            Name: 'Vincent',
            Age: 'Youth',
            Gender: 'Male',
            Skin: 'Medium',
            source: 'https://drive.google.com/thumbnail?id=1I0qOlnhoA4cXH6-YVhHPa98A-4dgmuCe',
        },
        {
            ID: '007',
            Name: 'Ekon',
            Age: 'Youth',
            Gender: 'Male',
            Skin: 'Deep',
            source: 'https://drive.google.com/thumbnail?id=1A5FZ3vrpXnVV9OQ1ZHRO9ymCi8NWrXAk',
        },
        {
            ID: '005',
            Name: 'Martín',
            Age: 'Youth',
            Gender: 'Male',
            Skin: 'Olive',
            source: 'https://drive.google.com/thumbnail?id=1j3rgWEpwVVlvmsM4KlwaEHkET2lZArd4',
        },
        {
            ID: '043',
            Name: 'Aarav',
            Age: 'Youth',
            Gender: 'Male',
            Skin: 'Tanned',            
            source: 'https://drive.google.com/thumbnail?id=181BIo1CJQfZKXYr9Wr6jFe2QKJ_e8z-K',
        },
    ],
    AGE: [
        {
            ID: '031',
            Name: 'Víctor',
            Age: 'Children',
            Gender: 'Male',
            Skin: 'Olive',  
            source: 'https://storage-web.pixocial.com/vmake-prod/~/static/images/3c011985c7bb99d0725f.jpg'
        },
        {
            ID: '039',
            Name: 'Ricardo',
            Age: 'Teen',
            Gender: 'Male',
            Skin: 'Olive',  
            source: 'https://storage-web.pixocial.com/vmake-prod/~/static/images/19de2ec153af8a7eb25b.jpg'
        },
        {
            ID: '005',
            Name: 'Martín',
            Age: 'Youth',
            Gender: 'Male',
            Skin: 'Olive',  
            source: 'https://storage-web.pixocial.com/vmake-prod/~/static/images/3160aa753a8469f7f62f.jpg'
        },
        {
            ID: '013',
            Name: 'Daniel',
            Age: 'Middle-Aged',
            Gender: 'Male',
            Skin: 'Olive',  
            source: 'https://storage-web.pixocial.com/vmake-prod/~/static/images/c3c9d918333425bd98fc.jpg'
        },
        {
            ID: '021',
            Name: 'Antonio',
            Age: 'Senior',
            Gender: 'Male',
            Skin: 'Olive',  
            source: 'https://storage-web.pixocial.com/vmake-prod/~/static/images/86e2103894354069be7f.jpg'
        },
    ]
};

export {
    loacl,
    FEMALE_IMAGES,
    MALE_IMAGES
}