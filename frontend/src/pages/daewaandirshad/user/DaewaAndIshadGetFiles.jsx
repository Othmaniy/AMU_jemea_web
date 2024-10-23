import React, { useEffect, useState } from 'react'
import Fileprops from '../../../components/fileprops/Fileprops';
import basepath from '../../../components/url/url';

function DaewaAndIshadGetFiles() {
    const [files,setFiles]=useState([]);
	useEffect(()=>{
		const fetchFiles=async()=>{
			try{
				const response =await basepath.get('/daewaandirshad/getfiles')
				setFiles(response.data.data)
			}
			catch(err){
				console.log(err);
			}
			
		}
		fetchFiles()
	},[])
  return (
	<>

	<Fileprops files={files} folder={"/derseFolders/"} />
	</>
  )
}


export default DaewaAndIshadGetFiles