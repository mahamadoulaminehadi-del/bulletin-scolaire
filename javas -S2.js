
function bul2 (){ 
	    
		let ddes = fr.value;
		let tel = hgr.value;
		let email = ar.value;
		let ans = mr.value;
		let np = pcr.value;
		let prf = svtr.value;
		let clas = efr.value;
		let efc = epr.value;
		
		let Dis = fr1.value; 
		let Disc = fr.value;
		let eta = far.value;
		let NCf = ncf.value; 
		let MCf = mcf.value; 
		let Msem= ((+MCf+(+NCf))/2)*Dis;
		
		let HG = hgr1.value;
		let HGr1 = hgr.value;
		let NChg = nchg.value;
		let MChg = mchg.value;
		let Msemhg= ((+MChg+(+NChg))/2)*HG;
		
		let A = ar1.value;
		let AN = ar.value;
		let NCa = nca.value;
		let MCa = mca.value;
		let Msema= ((+MCa+(+NCa))/2)*A;
		
		let M = mr1.value;
		let Mr1 = mr.value;
		let NCm = ncm.value;
		let MCm = mcm.value;
		let Msemm= ((+MCm+(+NCm))/2)*M;
		
		let PC = pcr1.value;
		let PCr1 = pcr.value;
		let NCPC = ncpc.value;
		let MCPC = mcpc.value;
		let MsemPC= ((+MCPC+(+NCPC))/2)*PC;
		
		let SVT = svtr1.value;
		let SVTr1 = svtr.value;
		let NCSVT = ncsvt.value;
		let MCSVT = mcsvt.value;
		let MsemSVT= ((+MCSVT+(+NCSVT))/2)*SVT;
		
		let EF = efr1.value;
		let EFr1 = efr.value;
		let NCEF = ncef.value;
		let MCEF = mcef.value;
		let MsemEF= ((+MCEF+(+NCEF))/2)*EF;
		
		let EP = epr1.value;
		let EPr1 = epr.value;
		let NCEP = ncep.value;
		let MCEP = mcep.value;
		let MsemEP= ((+MCEP+(+NCEP))/2)*EP;
		
		let C = cr1.value;
		let MC= cr.value;
		let MsemC= C*MC ;
		
		let T = (+Dis+(+HG)+(+A)+(+M)+(+PC)+(+SVT)+(+EF)+(+EP)+(+C));
		let MsemT= (+Msem+(+Msemhg)+(+Msema)+(+Msemm)+(+MsemPC)+(+MsemSVT)+(+MsemEF)+(+MsemEP)+(+MsemC));
		
		let Mo= (MsemT/T).toFixed(2);
		
		
		
		let Apf= ((+MCf+(+NCf))/2);
			if(Apf<="0"){Apf="Nul";} else if(Apf<="3"){Apf="Très médiocre";} else if(Apf<="5"){Apf="Médiocre";} else if(Apf<="7"){Apf="Très insuffisant";} else if(Apf<="9.99"){Apf="insuffisant";}else if(Apf<="11.99"){Apf="passable";} else if(Apf<="13.99"){Apf="A.bien";} else if(Apf<="16.99"){Apf="Bien";} else if(Apf<="19.99"){Apf="Très bien";} else if(Apf<="20"){Apf="Excellent";} else{Apf="";}
			
			let Aphg= ((+MChg+(+NChg))/2);
			if(Aphg<="0"){Aphg="Nul";} else if(Apf<="3"){Aphg="Très médiocre";} else if(Aphg<="5"){Apf="Médiocre";} else if(Aphg<="7"){Aphg="Très insuffisant";} else if(Aphg<="9.99"){Aphg="insuffisant";}else if(Aphg<="11.99"){Aphg="passable";} else if(Aphg<="13.99"){Aphg="A.bien";} else if(Aphg<="16.99"){Aphg="Bien";} else if(Aphg<="19.99"){Aphg="Très bien";} else if(Aphg<="20"){Aphg="Excellent";}
			
			let Apa= ((+MCa+(+NCa))/2);
			if(Apa<="0"){Apa="Nul";} else if(Apa<="3"){Apa="Très médiocre";} else if(Apa<="5"){Apa="Médiocre";} else if(Apa<="7"){Apa="Très insuffisant";} else if(Apa<="9.99"){Apa="insuffisant";}else if(Apa<="11.99"){Apa="passable";} else if(Apa<="13.99"){Apa="A.bien";} else if(Apa<="16.99"){Apa="Bien";} else if(Apa<="19.99"){Apa="Très bien";} else if(Apa<="20"){Apa="Excellent";}
			
			let Apm= ((+MCm+(+NCm))/2);
			if(Apm<="0"){Apm="Nul";} else if(Apm<="3"){Apm="Très médiocre";} else if(Apm<="5"){Apm="Médiocre";} else if(Apm<="7"){Apm="Très insuffisant";} else if(Apm<="9.99"){Apm="insuffisant";}else if(Apm<="11.99"){Apm="passable";} else if(Apm<="13.99"){Apm="A.bien";} else if(Apm<="16.99"){Apm="Bien";} else if(Apm<="19.99"){Apm="Très bien";} else if(Apm<="20"){Apm="Excellent";}
			
			let Appc= ((+MCPC+(+NCPC))/2);
			if(Appc<="0"){Appc="Nul";} else if(Appc<="3"){Appc="Très médiocre";} else if(Appc<="5"){Appc="Médiocre";} else if(Appc<="7"){Appc="Très insuffisant";} else if(Appc<="9.99"){Appc="insuffisant";}else if(Appc<="11.99"){Appc="passable";} else if(Appc<="13.99"){Appc="A.bien";} else if(Appc<="16.99"){Appc="Bien";} else if(Appc<="19.99"){Appc="Très bien";} else if(Appc<="20"){Appc="Excellent";}
			
			let Apsvt= ((+MCSVT+(+NCSVT))/2);
			if(Apsvt<="0"){Apsvt="Nul";} else if(Apsvt<="3"){Apsvt="Très médiocre";} else if(Apsvt<="5"){Apsvt="Médiocre";} else if(Apsvt<="7"){Apsvt="Très insuffisant";} else if(Apsvt<="9.99"){Apsvt="insuffisant";}else if(Apsvt<="11.99"){Apsvt="passable";} else if(Apsvt<="13.99"){Apsvt="A.bien";} else if(Apsvt<="16.99"){Apsvt="Bien";} else if(Apsvt<="19.99"){Apsvt="Très bien";} else if(Apsvt<="20"){Apsvt="Excellent";}
			
			let Apef= ((+MCEF+(+NCEF))/2);
			if(Apef<="0"){Apef="Nul";} else if(Apef<="3"){Apef="Très médiocre";} else if(Apef<="5"){Apef="Médiocre";} else if(Apef<="7"){Apef="Très insuffisant";} else if(Apef<="9.99"){Apef="insuffisant";}else if(Apef<="11.99"){Apef="passable";} else if(Apef<="13.99"){Apef="A.bien";} else if(Apef<="16.99"){Apef="Bien";} else if(Apef<="19.99"){Apef="Très bien";} else if(Apef<="20"){Apef="Excellent";}
			
			let Apep= ((+MCEP+(+NCEP))/2);
			if(Apep<="0"){Apep="Nul";} else if(Apep<="3"){Apep="Très médiocre";} else if(Apep<="5"){Apep="Médiocre";} else if(Apep<="7"){Apep="Très insuffisant";} else if(Apep<="9.99"){Apep="insuffisant";}else if(Apep<="11.99"){Apep="passable";} else if(Apep<="13.99"){Apep="A.bien";} else if(Apep<="16.99"){Apep="Bien";} else if(Apep<="19.99"){Apep="Très bien";} else if(Apep<="20"){Apep="Excellent";}
			
			let Apc= MsemC;
			if(Apc<="0"){Apc="Nul";} else if(Apc<="3"){Apc="Très médiocre";} else if(Apc<="5"){Apc="Médiocre";} else if(Apc<="7"){Apc="Très insuffisant";} else if(Apc<="9.99"){Apc="insuffisant";}else if(Apc<="11.99"){Apc="passable";} else if(Apc<="13.99"){Apc="A.bien";} else if(Apc<="16.99"){Apc="Bien";} else if(Apc<="19.99"){Apc="Très bien";} else if(Apc<="20"){Apc="Excellent";}
			
			let Apt= (MsemT/T).toFixed(2);
			if(Apt<="0"){Apt="Nul";} else if(Apt<="3"){Apt="Très médiocre";} else if(Apt<="5"){Apt="Médiocre";} else if(Apt<="7"){Apt="Très insuffisant";} else if(Apt<="9.99"){Apt="insuffisant";}else if(Apt<="11.99"){Apt="passable";} else if(Apt<="13.99"){Apt="A.bien";} else if(Apt<="16.99"){Apt="Bien";} else if(Apt<="19.99"){Apt="Très bien";} else if(Apt<="20"){Apt="Excellent";}
			
			var s1= document.getElementById("s1").value;
			let s2= (MsemT/T);
		let ma= (((+s1)+(s2))/2).toFixed(2);
			let cte= Apc;
			
			 
			
			
				
			

				
			
			let image= document.getElementById('imageAfficher').src;
			
				
										
		    let bulletin ="<!DOCTYPE html><html><head><link rel='stylesheet' href='s.css'></head> <body><main><br><b> <table width='660' id='t1'><tr><td>République du Niger</td><td rowspan='6' style='text-align: right;'><img src="+image+" alt='' id='imageAfficher' style='max-width: 100px; max-height: 100px;'></img></td></tr><tr><td> Ministère des Enseignements Secondaires</td></tr><tr><td> DDES/ "+ddes+"</td></tr><tr><td> "+eta+"</td></tr> <tr><td> Tél. : "+tel+"</td> </tr><tr><td> E-mail: "+email+"</td></tr></table><br><table border='1'  width='660' id='t2'><tr bgcolor='white' ><th>Bulletin du 1<sup>er</sup> Semestre</th></tr></table> <br>  <table width='660' border='1' id='t3' ><tr><td width='250'>Année Scolaire: "+ans+"</td> <td width='450'>Effectif de la classe: "+np+"</td></tr>  <tr> <td>Classe: "+prf+"</td><td>Prof. Responsable: "+clas+"</td></tr> <tr width='650'><td colspan='2'>Nom et Prénom: "+efc+"</td> </tr> <tr><td>Moyenne Semestrielle: "+Mo+"</td><td></td></tr><tr><td>Rang:</td><td>Matricule:</td></tr></b>  <b>  </table> <br><table border='1' width='660' id='t4'> <tr bgcolor='white' ><th style='text-align: center;' width='160'>Disciplines</th> <th>Coef.</th> <th>Note Classe</th> <th>Note Comp.</th> <th>M. Sem.</th> <th>Rang</th> <th>Appreciation professeurs</th><th>Signatures prof.</th>  </tr>          <tr bgcolor='white'>  <td style='text-align: center;'>Français</td> <td style='text-align: center;'>"+Dis+"</td> <td>"+NCf+"</td> <td>"+MCf+"</td> <td>"+Msem+"</td> <td></td> <td>"+Apf+"</td><th></th> </tr> <tr bgcolor='white'>  <td style='text-align: center;'>Histoire-Géo.</td> <td style='text-align: center;'>"+HG+"</td> <td>"+NChg+"</td> <td>"+MChg+"</td> <td>"+Msemhg+"</td> <td></td> <td>"+Aphg+"</td><th></th> <tr bgcolor='white'>  <td style='text-align: center;'>Anglais</td> <td style='text-align: center;'>"+A+"</td> <td>"+NCa+"</td> <td>"+MCa+"</td> <td>"+Msema+"</td> <td></td> <td>"+Apa+"</td><th></th>   <tr bgcolor='white'>  <td style='text-align: center;'>Mathématique</td> <td style='text-align: center;'>"+M+"</td> <td>"+NCm+"</td> <td>"+MCm+"</td> <td>"+Msemm+"</td> <td></td> <td>"+Apm+"</td> <th></th></tr>   <tr bgcolor='white'>  <td style='text-align: center;'>Physique-Chimie</td> <td style='text-align: center;'>"+PC+"</td> <td>"+NCPC+"</td> <td>"+MCPC+"</td> <td>"+MsemPC+"</td> <td></td> <td>"+Appc+"</td>  <th></th>    <tr bgcolor='white'>  <td style='text-align: center;'>S.V.T</td> <td style='text-align: center;'>"+SVT+"</td> <td>"+NCSVT+"</td> <td>"+MCSVT+"</td> <td>"+MsemSVT+"</td> <td></td> <td>"+Apsvt+"</td> <th></th>             <tr bgcolor='white'>  <td style='text-align: center;'>E.F.S</td> <td style='text-align: center;'>"+EF+"</td> <td>"+NCEF+"</td> <td>"+MCEF+"</td> <td>"+MsemEF+"</td> <td></td> <td>"+Apef+"</td> <th></th>             <tr bgcolor='white'>  <td style='text-align: center;'>E.P.S</td> <td style='text-align: center;'>"+EP+"</td> <td>"+NCEP+"</td> <td>"+MCEP+"</td> <td>"+MsemEP+"</td> <td></td> <td>"+Apep+"</td>  <th></th>   <tr bgcolor='white'>  <td style='text-align: center;'>Conduite</td> <td style='text-align: center;'>"+C+"</td> <td colspan='3' style='text-align: right;'>"+MsemC+"</td>   <td></td> <td>"+Apc+"</td>   <th></th>         <tr bgcolor='white'>  <td style='text-align: center;'>TOTAL</td> <td style='text-align: center;'>"+T+"</td> <td></td> <td></td> <td>"+MsemT+"</td> <td></td> <td></td> <th></th></table>  <table border='1' width='330' id='t5' >  <tr bgcolor='white'>  <td rowspan='3' style='text-align: center;' >Moyenne</td> <td colspan='2'>1<sup>er</sup> Semestre:</td>  <td colspan='3' width='25O'>"+s1+"</td>           <tr bgcolor='white'> <td colspan='2'>2<sup>eme</sup> Semestre:</td>  <td colspan='3'>"+Mo+"</td>   <tr bgcolor='white'>  <td colspan='2'>Annuelle:</td>  <td colspan='3'>"+ma+"</td>   </table> <br> <div>  <table border='1' width='660' id='t6'>   <tr bgcolor='white'><th width=''>Conduite</th>  <th width=''>Tableau d'honneur</th><th width=''>Assiduité-Retard</th> </tr><tr bgcolor='white' > <td><div><label>Bien <input type='checkbox'></label> <div><label>Passable <input type='checkbox'></label> <div><label>Mal <input type='checkbox'></label> <div><label>Avertissement <input type='checkbox'></label> <div><label>Blâme <span style='text-align: center;'><input type='checkbox'></label></td> <td><div><label>Inscrit        <input type='checkbox'></label> </div> <div><label>Félicitation <input type='checkbox'></label> </div> <div><label>Encouragement <input type='checkbox'></label> <div><label>Non inscrit <input type='checkbox'></label> </div> </td> <td> <div><label>Assiduité <input type='checkbox'></label> <div><label>Retard <input type='checkbox'></label> <div><label>Absentéiste <input type='checkbox'></label> </td></tr>      </table></div></b><br> <h4 style='text-align: right;'>Proviseur</h4></main> </body></html>";
			 
			  window.alert('Bulletin du semestre 2 validé avec succès!');
			resultat.innerHTML= (bulletin);
				let nom= efc;
               let   myjson= bulletin;
				 
				  localStorage.setItem(nom, myjson);
				
			
                 document.getElementById('pdf').addEventListener('click', () => { result.innerHTML= (bulletin);
  });
  document.getElementById('imp').addEventListener('click', () => { document.writeln (bulletin);
	window.print();
  });
		document.getElementById('telecharger').addEventListener('click', () => {
    import('https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js').then(lib => {
      const element = document.getElementById('resultat');
      lib.default().from(element).save('bulletin.pdf');
    });
  });
 		
			
			 }

					  
				
			

		

  
 
			
