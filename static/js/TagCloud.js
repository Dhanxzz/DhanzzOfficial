/*------------------------------------------------------------------
[Template: Dhanzz]
-------------------------------------------------------------------*/
const Texts =[
'HTML', 'CSS','KPI', 'Design', 'Reporting', 'Journey', 'Optimization', 'Content', 'Click rates', 'Merge Tags', 'Copywriting','Rendering',
'Klaviyo', 'Emails', 'Listrak', 'Hubspot', 'Triggers', 'Chatgpt', 'Subject lines', 'Open rates','Gmail','Outlook', 'Subscribes','Audiences',
'Attentive', 'Voyage', 'Mailchimp', 'Segmentation','SMS', 'Deliverability', 'Preheaders','Domains','From Name', 'ROI','Microsoft','Personalization',
'Analytics', 'A/B Testing', 'Lead Generation', 'Popup', 'Signup Forms', 'Automation', 'Smart Sending','Suppressions'];
var TagCloud = TagCloud('.Sphere', Texts,{
radius:360,
maxSpeed:'normal',
initSpeed:'fast',
direction:135,
keep:true
});