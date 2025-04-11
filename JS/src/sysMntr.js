
function fetchStats() {
        $.getJSON('/api/stats', function(data) {
                const stats = `
                        Disk - Total: ${data.disk.total}, Used: ${data.disk.used}, Free: ${data.disk.free}    | 
                        RAM - Total: ${data.ram.total}, Used: ${data.ram.used}, Free: ${data.ram.free}    | 
                        Swap - Total: ${data.swap.total}, Used: ${data.swap.used}, Free: ${data.swap.free}    |
                        CPU - Count: ${data.cpu.count}, Usage: ${data.cpu.percent}%, 
                        Current Frequency: ${data.cpu.current_freq}, Temperature: ${data.cpu.temp.current}°C, 
                        Critical Temperature: ${data.cpu.temp.critical}°C    |
                `;
                $('#stats').text(stats)
                $('#stats-duplicate').text(stats)

                var bt = data.boot_time;
                var btp = bt.split(' ');
                var time= btp.length > 1 ? btp[1] : bt;
                document.getElementById("boot").innerHTML = "start boot: "+ time
                
                var p_1 = data.ram.used_percent 
                var p_2 = data.swap.used_percent 
                var p_3 = data.cpu.percent
                
                setTimeout(function(){
                        var m = document.getElementById("msc")
                        var p = document.getElementById("prc")
                        var t = document.getElementById("typ").innerHTML = "MEM ["

                        const levels = [
                                { max: 10,  color: "gray", bars: ">>                  " },
                                { max: 20,  color: "gray", bars: ">>>>                " },
                                { max: 30,  color: "gray", bars: ">>>>>>              " },
                                { max: 40,  color: "gray", bars: ">>>>>>>>            " },
                                { max: 50,  color: "gray", bars: ">>>>>>>>>>          " },
                                { max: 60,  color: "#ff313f", bars: ">>>>>>>>>>>>        " },
                                { max: 70,  color: "#ff313f", bars: ">>>>>>>>>>>>>>      " },
                                { max: 80,  color: "#ff313f", bars: ">>>>>>>>>>>>>>>>    " },
                                { max: 90,  color: "#ff313f", bars: ">>>>>>>>>>>>>>>>>>  " },
                                { max: 100, color: "#ff313f", bars: ">>>>>>>>>>>>>>>>>>>>" }
                        ]
                        for (const level of levels) {
                                if (p_1 <= level.max) {
                                        m.style.color = level.color
                                        m.innerHTML = level.bars
                                        p.innerHTML = `] ${p_1} %`
                                        break
                                }
                        } 
                },3000)
                setTimeout(function(){
                        var m = document.getElementById("msc")
                        var p = document.getElementById("prc")
                        var t = document.getElementById("typ").innerHTML = "SWP ["

                        const levels = [
                                { max: 10,  color: "gray", bars: ">>                  " },
                                { max: 20,  color: "gray", bars: ">>>>                " },
                                { max: 30,  color: "gray", bars: ">>>>>>              " },
                                { max: 40,  color: "gray", bars: ">>>>>>>>            " },
                                { max: 50,  color: "gray", bars: ">>>>>>>>>>          " },
                                { max: 60,  color: "#ff313f", bars: ">>>>>>>>>>>>        " },
                                { max: 70,  color: "#ff313f", bars: ">>>>>>>>>>>>>>      " },
                                { max: 80,  color: "#ff313f", bars: ">>>>>>>>>>>>>>>>    " },
                                { max: 90,  color: "#ff313f", bars: ">>>>>>>>>>>>>>>>>>  " },
                                { max: 100, color: "#ff313f", bars: ">>>>>>>>>>>>>>>>>>>>" }
                        ]
                        for (const level of levels) {
                                if (p_2 <= level.max) {
                                        m.style.color = level.color
                                        m.innerHTML = level.bars
                                        p.innerHTML = `] ${p_2} %`
                                        break
                                }
                        } 
                },6000)                  
                setTimeout(function(){
                        var m = document.getElementById("msc")
                        var p = document.getElementById("prc")
                        var t = document.getElementById("typ").innerHTML = "CPU ["

                        const levels = [
                                { max: 10,  color: "gray", bars: ">>                  " },
                                { max: 20,  color: "gray", bars: ">>>>                " },
                                { max: 30,  color: "gray", bars: ">>>>>>              " },
                                { max: 40,  color: "gray", bars: ">>>>>>>>            " },
                                { max: 50,  color: "gray", bars: ">>>>>>>>>>          " },
                                { max: 60,  color: "#ff313f", bars: ">>>>>>>>>>>>        " },
                                { max: 70,  color: "#ff313f", bars: ">>>>>>>>>>>>>>      " },
                                { max: 80,  color: "#ff313f", bars: ">>>>>>>>>>>>>>>>    " },
                                { max: 90,  color: "#ff313f", bars: ">>>>>>>>>>>>>>>>>>  " },
                                { max: 100, color: "#ff313f", bars: ">>>>>>>>>>>>>>>>>>>>" }
                        ]
                        for (const level of levels) {
                                if (p_3 <= level.max) {
                                        m.style.color = level.color
                                        m.innerHTML = level.bars
                                        p.innerHTML = `] ${p_3} %`
                                        break
                                }
                        } 
                },9000)                  
        })
}
fetchStats()
setInterval(fetchStats, 9000)

var fps = document.getElementById("fps")
var startTime = Date.now(), frame = 0

function tick(){
        var time = Date.now()
        frame++
        if(time - startTime > 1000){
                fps.innerHTML = (frame / ((time - startTime) / 1000)).toFixed(2) + " fps"
                startTime = time; frame = 0
        }; window.requestAnimationFrame(tick)
}; tick()
