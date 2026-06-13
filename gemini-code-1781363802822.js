/**
 * Smart Timetable CMS - Global Configuration
 * Version: 10.0 (Standardized for SaaS BYOD)
 */

window.SCHOOL_CONFIG = {
    // 🌟 1. பள்ளியின் வழக்கமான நேரங்கள் (Standard 8 Periods)
    regularTimings: [
        { label: '1', start: '09:30 AM', end: '10:15 AM', type: 'class' },
        { label: '2', start: '10:15 AM', end: '11:00 AM', type: 'class' },
        { label: 'Break', start: '11:00 AM', end: '11:10 AM', type: 'break' },
        { label: '3', start: '11:10 AM', end: '11:50 AM', type: 'class' },
        { label: '4', start: '11:50 AM', end: '12:30 PM', type: 'class' },
        { label: 'Lunch', start: '12:30 PM', end: '01:30 PM', type: 'break' },
        { label: '5', start: '01:30 PM', end: '02:10 PM', type: 'class' },
        { label: '6', start: '02:10 PM', end: '02:50 PM', type: 'class' },
        { label: 'Break', start: '02:50 PM', end: '03:00 PM', type: 'break' },
        { label: '7', start: '03:00 PM', end: '03:40 PM', type: 'class' },
        { label: '8', start: '03:40 PM', end: '04:15 PM', type: 'class' }
    ],

    // 🌟 2. தேர்வுக்கான அமைப்புகள் (Exam Settings)
    examSettings: {
        FN: {
            reporting: '09:30 AM',
            reading: '09:45 AM',
            writingStart: '10:00 AM',
            writingEnd: '01:00 PM'
        },
        AN: {
            reporting: '01:30 PM',
            reading: '01:45 PM',
            writingStart: '02:00 PM',
            writingEnd: '04:30 PM'
        }
    },

    // 🌟 3. தேர்வு நடைபெறும் வகுப்புகளின் பேட்டர்ன் (Exam Patterns)
    examPatterns: {
        "Full School (1 to 12)": [
            '12', '11', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1'
        ],
        "High & Hr.Sec Only (6 to 12)": [
            '12', '11', '10', '9', '8', '7', '6'
        ]
    },

    // 🌟 4. Runtime Data (Do not edit manually, the engine will populate this)
    assignments: [] 
};