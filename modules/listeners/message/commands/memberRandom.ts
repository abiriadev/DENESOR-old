export {}

// import {log} from "util";
import Command from "../../../classes/Command"
// import fs from "fs/promises"

let me: Command;
me = new Command(
    {
        condition: async msg => /* console.log( */ msg.content == "randommember",
        // return false

        action: async msg => {

            // const target_role = msg.guild.roles.cache.find(role_ele => role_ele.name == 'Greeting');
            // target_role.members.forEach(member => console.log(member.displayName))

            const shuffle = (array: Array<any>): Array<any> => array.sort(() => Math.random() - Math.random())
            const randomChoice = (array: Array<any>, n: number): Array<any> => shuffle(array).splice(0, n)
            const generate_range_array = (n: number): Array<number> => {
                let arr: Array<number> = []
                let i: number = 0
                while (i < n) {
                    arr.push(i)
                    // console.log(i)
                    i++
                }
                return arr
            }

            const random_get_members_according_to_role = (target_guild, target_role_name: string, n: number): Array<any> => {

                // member 콜렉션 가져오기
                let original: Array<any> = (target_guild.roles.cache.find(role => role.name == target_role_name)).members

                // original = Array.prototype.slice.call(original)
                const get_original_index = (index: number): any => {

                    let i = 0
                    let ele_ = null
                    original.forEach(ele => {

                        if (i == index) {
                            // console.log(ele)
                            ele_ = ele
                        }
                        i++

                    })
                    return ele_

                }

                let c = 0
                console.log(`original: ${original.forEach(e => c++)}`)
                console.log(`c: ${c}`)

                let index_array = generate_range_array(c /* original.length */)

                console.log(`index_array: ${index_array}`)

                let shuffled_index_array = randomChoice(index_array, n)

                console.log(`shuffled_index_array: ${shuffled_index_array}`)

                // 리턴할 배열 생성
                let new_original: Array<any> = []

                // 추출
                shuffled_index_array.forEach(i => new_original.push(get_original_index(i)))

                return new_original

            }

            //@ts-ignore

            let asd = random_get_members_according_to_role(msg.guild, "Greeting", 4)

            console.log("asd: ----")

            // console.log(asd)
            asd.forEach(member => console.log(member.user.username))

            // await fs.writeFile("./re.json", JSON.stringify(await msg.guild.members.fetch()))

        },
        description: `random_get_members_according_to_role command`
    }
    // {condition : msg => msg.content = "me", action : msg => msg.reply(`네, $msg.author 님!`), description : 'generel command'}
);

export default me