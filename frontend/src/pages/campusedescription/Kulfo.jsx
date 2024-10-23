import React from 'react'
import CampusdescProps from '../../components/campusesdescription/CampusdescProps'

function Kulfo() {
  return (
    <>
    <CampusdescProps 
    campusdesc="welcome to kulfo campus"
    images={[
        'url1.jpg',
        'url2.jpg',
        'url3.jpg',
      ]}
      departments={[
        { name: 'Horticulture', description: 'The Horticulture program at Arba Minch University empowers students with cutting-edge knowledge in plant science, focusing on innovative and sustainable cultivation of fruits, vegetables, and ornamental plants. Through hands-on training in advanced pest control, soil management, and eco-friendly techniques, students are equipped to transform the agricultural landscape. Graduates emerge as leaders in the field, ready to drive environmental sustainability and agricultural excellence.' },
        { name: 'Food science and postharvest technology ', description: 'The Food Science and Post-Harvest Technology program at Arba Minch University focuses on improving food quality, safety, and shelf life. Students learn about food processing, preservation techniques, and minimizing post-harvest losses. This program prepares graduates to work in food production, quality control, and research to ensure a sustainable and safe food supply.' },
        { name: 'Plant science ', description: 'The Plant Science program at Arba Minch University teaches students how to improve crop production and manage plant health. Students learn about plant breeding, soil science, and pest control to enhance agricultural productivity. Graduates are equipped to work in farming, research, and environmental management.' },
        { name: 'Rural development and agricultural extension', description: 'The Rural Development and Agricultural Extension program at Arba Minch University focuses on improving rural communities through sustainable agriculture and education. Students learn about community development, agricultural innovation, and effective communication with farmers. Graduates are prepared to lead projects that enhance rural livelihoods and promote agricultural growth.' },
        { name: 'Agribusiness and value chain management ', description: 'The Agribusiness and Value Chain Management program at Arba Minch University trains students to manage agricultural businesses and improve the efficiency of the farm-to-market process. Students learn about entrepreneurship, marketing, and supply chain management in the agricultural sector. Graduates are prepared to drive economic growth by optimizing agricultural production and market systems.' },
        { name: 'Agricultural economics', description: 'The Agricultural Economics program at Arba Minch University focuses on the economic aspects of agriculture, helping students understand how to improve productivity and profitability. Students learn about farm management, resource allocation, and market analysis. Graduates are equipped to make informed decisions that boost agricultural growth and sustainability.' },
        { name: 'General forestry ', description: 'The General Forestry program at Arba Minch University focuses on sustainable forest management and conservation. Students learn about forest ecology, wildlife management, and reforestation techniques. Graduates are prepared to protect natural resources and promote environmental sustainability through effective forest management practices.' },
        { name: 'Natural resource management', description: 'The Natural Resource Management program at Arba Minch University trains students to sustainably manage land, water, and other natural resources. Students learn about conservation, environmental protection, and resource planning. Graduates are prepared to address environmental challenges and promote the sustainable use of natural resources.' },
        { name: 'Animal and range science', description: 'The Animal and Range Science program at Arba Minch University focuses on improving livestock production and sustainable rangeland management. Students learn about animal health, breeding, and grazing practices to enhance productivity. Graduates are prepared to work in livestock farming, wildlife conservation, and sustainable range management.' },
        { name: 'Animal health', description: 'The Animal Health program at Arba Minch University focuses on ensuring the well-being of livestock through disease prevention and treatment. Students learn about veterinary care, animal nutrition, and disease control. Graduates are equipped to work in veterinary services, livestock management, and animal welfare.' },
        { name: 'Fisheries, Aquaculture, and Wetland Management', description: 'The Fisheries, Aquaculture, and Wetland Management program at Arba Minch University focuses on sustainable fish farming and the conservation of aquatic ecosystems. Students learn about fish breeding, water management, and wetland conservation. Graduates are prepared to work in fisheries, aquaculture, and the protection of water resources.' },
      ]}
    
    />
    
    
    </>
  )
}

export default Kulfo