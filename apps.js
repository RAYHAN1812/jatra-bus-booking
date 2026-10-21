const $=id=>document.getElementById(id);
const destinations=[
 {name:"Srimangal",area:"Sylhet Division",moods:["nature","adventure"],budget:4200,best:"Tea gardens, forest trails and a slow cup of seven-layer tea.",plan:["Day 1: Travel to Srimangal, visit a tea estate and explore the town.","Day 2: Start early for Lawachara National Park, then return home."],from:["Dhaka","Sylhet","Mymensingh"]},
 {name:"Cox's Bazar",area:"Chattogram Division",moods:["beach","adventure"],budget:7800,best:"Long sea views, beach walks and a sunset on the shore.",plan:["Day 1: Arrive, settle in and enjoy a late-afternoon beach walk.","Day 2: Catch sunrise, explore the beach and local food spots.","Day 3: Optional Himchari visit before heading back."],from:["Dhaka","Chattogram","Sylhet","Rajshahi","Khulna"]},
 {name:"Sonargaon",area:"Narayanganj",moods:["culture","nature"],budget:1800,best:"Historic Bengal architecture and a refreshing day away from the city.",plan:["Morning: Visit the Folk Art and Craft Museum area.","Afternoon: Explore Panam City and enjoy a local lunch.","Evening: Return to Dhaka."],from:["Dhaka","Mymensingh","Rajshahi"]},
 {name:"Rangamati",area:"Chattogram Division",moods:["nature","adventure"],budget:6500,best:"Lake views, green hills and a slower pace by Kaptai Lake.",plan:["Day 1: Arrive and enjoy a lakeside evening.","Day 2: Explore lake viewpoints and local markets.","Day 3: Have breakfast, take one last walk and return."],from:["Dhaka","Chattogram","Khulna"]},
 {name:"Paharpur & Naogaon",area:"Rajshahi Division",moods:["culture"],budget:3800,best:"Ancient Buddhist heritage and a fascinating glimpse into Bengal's past.",plan:["Day 1: Travel to Naogaon and rest.","Day 2: Visit Somapura Mahavihara and nearby heritage spots, then return."],from:["Dhaka","Rajshahi","Rangpur"]},
 {name:"Sajek Valley",area:"Chattogram Division",moods:["nature","adventure"],budget:9000,best:"Hilltop horizons, cloud-watching and winding mountain roads.",plan:["Day 1: Travel via Khagrachhari with a pre-arranged local transfer.","Day 2: Explore viewpoints and enjoy the hills.","Day 3: Return with enough daylight for the journey."],from:["Dhaka","Chattogram","Rajshahi"]},
 {name:"Kuakata",area:"Barishal Division",moods:["beach","nature"],budget:7000,best:"A wide-open beach known for views of both sunrise and sunset.",plan:["Day 1: Arrive and watch the sunset.","Day 2: Wake early for sunrise and explore the local area.","Day 3: Have breakfast and begin the return journey."],from:["Dhaka","Khulna","Barishal"]},
 {name:"Bagerhat",area:"Khulna Division",moods:["culture","nature"],budget:3200,best:"Historic mosque architecture, quiet waterways and heritage sites.",plan:["Day 1: Travel to Khulna or Bagerhat and settle in.","Day 2: Visit the Sixty Dome Mosque and nearby historic sites, then return."],from:["Dhaka","Khulna","Rajshahi"]}
];
const taka=n=>"৳"+Math.round(n).toLocaleString("en-US");
$("find-escape").addEventListener("click",()=>{
 const start=$("start-city").value,budget=Number($("trip-budget").value),days=Number($("trip-days").value),mood=$("trip-mood").value;
 let pool=destinations.filter(d=>d.moods.includes(mood)&&d.budget<=budget);
 if(!pool.length)pool=destinations.filter(d=>d.budget<=budget);
 pool.sort((a,b)=>Number(b.from.includes(start))-Number(a.from.includes(start))||a.budget-b.budget);
 const dest=pool[0]||destinations.find(d=>d.moods.includes(mood))||destinations[0];
 const est=Math.round(dest.budget*(days === 1 ? 0.62 : days === 2 ? 1 : 1.42));
 const plan=days===1?[dest.plan[0].replace("Day 1: ",""),dest.plan[1]||"Enjoy a relaxed afternoon and head home before late evening."]:dest.plan.slice(0,days);
 $("escape-result").innerHTML=`<span class="eyebrow">YOUR MATCH · ${dest.area.toUpperCase()}</span><h3>${dest.name}</h3><p>${dest.best}</p><div class="metric-row"><div class="metric"><span>Estimated budget / person</span><strong>${taka(est)}</strong></div><div class="metric"><span>Suggested duration</span><strong>${days} day${days>1?"s":""}</strong></div></div><ul>${plan.map(p=>`<li>${p}</li>`).join("")}</ul><p><strong>Planning tip:</strong> Check current transport, weather, local access and accommodation before leaving. Estimates vary by season and group size.</p>`;
 $("escape-result").classList.remove("hidden");
});
const expenseIds=["transport","stay","food","activities","other"];
function calculateSplit(){
 const people=Math.max(1,Math.min(40,Math.floor(Number($("people").value)||1)));
 $("people").value=people;
 const amounts=expenseIds.map(id=>Math.max(0,Number($(id).value)||0));
 const total=amounts.reduce((a,b)=>a+b,0),share=total/people;
 $("split-result").innerHTML=`<span class="eyebrow">YOUR GROUP BUDGET</span><h3>${taka(total)} total</h3><p>${people} traveller${people===1?"":"s"} sharing the listed expenses equally.</p><div class="metric-row"><div class="metric"><span>Each person pays</span><strong>${taka(share)}</strong></div><div class="metric"><span>Daily share (2 days)</span><strong>${taka(share/2)}</strong></div></div><ul>${expenseIds.map((id,i)=>`<li>${({transport:"Transport",stay:"Accommodation",food:"Food",activities:"Activities",other:"Other costs"})[id]}: ${taka(amounts[i])} · ${taka(amounts[i]/people)} per person</li>`).join("")}</ul><p>Tip: Agree who pays each bill and settle any differences as a group. This calculator assumes all listed costs are shared equally.</p>`;
 $("split-result").classList.remove("hidden");
}
$("calculate-split").addEventListener("click",calculateSplit);
expenseIds.concat(["people"]).forEach(id=>$(id).addEventListener("input",()=>{if(!$("split-result").classList.contains("hidden"))calculateSplit();}));
const baseItems=[
 {label:"Phone + charging cable",group:"essentials"},
 {label:"Wallet, ID and cash",group:"essentials"},
 {label:"Tickets / booking details",group:"essentials"},
 {label:"Daily medicines",group:"essentials"},
 {label:"Reusable water bottle",group:"essentials"},
 {label:"Toothbrush and toothpaste",group:"essentials"},
 {label:"Face wash and toiletries",group:"essentials"},
 {label:"Hand sanitizer / tissues",group:"essentials"},
 {label:"Power bank",group:"essentials"},
 {label:"Comfortable walking shoes",group:"essentials"},
 {label:"Sunscreen and sunglasses",group:"essentials"},
 {label:"Light rain jacket / umbrella",group:"essentials"}
];
const styleItems={
 city:[{label:"One neat outfit",group:"clothes"},{label:"Comfortable city-walk outfit",group:"clothes"},{label:"Small day bag",group:"extras"},{label:"Offline map saved",group:"extras"}],
 beach:[{label:"Swimwear",group:"clothes"},{label:"Extra towel",group:"extras"},{label:"Sandals",group:"clothes"},{label:"Waterproof phone pouch",group:"extras"},{label:"Sun hat",group:"extras"}],
 hiking:[{label:"Grippy walking shoes",group:"clothes"},{label:"Quick-dry layers",group:"clothes"},{label:"Small first-aid kit",group:"extras"},{label:"Torch / headlamp",group:"extras"},{label:"Trail snacks",group:"extras"}],
 work:[{label:"Work laptop and charger",group:"work"},{label:"Notebook and pen",group:"work"},{label:"Meeting-ready outfit",group:"clothes"},{label:"Headphones",group:"work"},{label:"Backup presentation files",group:"work"}]
};
let customItems=[],checkedItems=new Set();
function getPackingItems(){
 const days=Number($("pack-days").value),style=$("pack-style").value;
 const clothes=Array.from({length:days},(_,i)=>({label:`Clothing set ${i+1}`,group:"clothes"}));
 return [...baseItems,...clothes,...styleItems[style],...customItems];
}
function renderPacking(){
 const items=getPackingItems();
 $("packing-list").innerHTML=items.map((item,i)=>{const id=item.label;const done=checkedItems.has(id);return `<label class="pack-item ${done?"done":""}"><input type="checkbox" data-pack="${encodeURIComponent(id)}" ${done?"checked":""}><span>${item.label}</span></label>`;}).join("");
 const packed=items.filter(i=>checkedItems.has(i.label)).length,pct=items.length?Math.round(packed/items.length*100):0;
 $("pack-progress-label").textContent=`${packed} of ${items.length} packed`;$("pack-percent").textContent=pct+"%";$("pack-progress").style.width=pct+"%";
}
$("packing-list").addEventListener("change",e=>{const input=e.target.closest("[data-pack]");if(!input)return;const label=decodeURIComponent(input.dataset.pack);if(input.checked)checkedItems.add(label);else checkedItems.delete(label);renderPacking();});
$("pack-days").addEventListener("change",renderPacking);$("pack-style").addEventListener("change",renderPacking);
$("add-item-form").addEventListener("submit",e=>{e.preventDefault();const input=$("custom-item"),label=input.value.trim();if(!label)return;if(getPackingItems().some(i=>i.label.toLowerCase()===label.toLowerCase())){input.setCustomValidity("That item is already on your list.");input.reportValidity();input.setCustomValidity("");return;}customItems.push({label,group:"custom"});input.value="";renderPacking();});
$("reset-packing").addEventListener("click",()=>{checkedItems.clear();renderPacking();});
calculateSplit();renderPacking();