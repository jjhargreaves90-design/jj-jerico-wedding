import {defineType,defineField} from 'sanity';
export const siteSettings=defineType({name:'siteSettings',title:'Wedding website content',type:'document',fields:[
 defineField({name:'eyebrow',title:'Homepage small heading',type:'string',initialValue:'TOGETHER, A BRIGHTER JOURNEY'}),
 defineField({name:'coupleNames',title:'Names',type:'string',initialValue:'JJ & Jerico'}),
 defineField({name:'weddingDate',title:'Wedding date',type:'string',initialValue:'Saturday 3 April 2027'}),
 defineField({name:'location',title:'Wedding location',type:'string',initialValue:'London, United Kingdom'}),
 defineField({name:'intro',title:'Our story introduction',type:'text',rows:4}),
 defineField({name:'ceremonyTitle',title:'Ceremony heading',type:'string'}),
 defineField({name:'ceremonyDetails',title:'Ceremony details',type:'text',rows:3}),
 defineField({name:'receptionTitle',title:'Reception heading',type:'string'}),
 defineField({name:'receptionDetails',title:'Reception details',type:'text',rows:3}),
 defineField({name:'travelDetails',title:'Travel information',type:'text',rows:4}),
 defineField({name:'faqItems',title:'FAQs',type:'array',of:[{type:'object',fields:[defineField({name:'question',type:'string'}),defineField({name:'answer',type:'text'})]}]})
]});