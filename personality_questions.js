// 问题库
const questionBank = {
    child: {
        mbti: [
            {
                id: 'mbti_1',
                question: "你更喜欢放学后自己安静地玩，还是和小伙伴一起游戏更开心？",
                options: [
                    { text: "喜欢自己安静地玩", value: "I" },
                    { text: "喜欢和小伙伴一起玩", value: "E" }
                ],
                dimension: "EI"
            },
            {
                id: 'mbti_2',
                question: "当完成作业时，你是更关注做对每一步，还是更喜欢试试新方法？",
                options: [
                    { text: "关注做对每一步", value: "S" },
                    { text: "喜欢尝试新方法", value: "N" }
                ],
                dimension: "SN"
            },
            {
                id: 'mbti_3',
                question: "遇到同学伤心时，你会先分析原因，还是先安慰他？",
                options: [
                    { text: "先分析原因", value: "T" },
                    { text: "先安慰他", value: "F" }
                ],
                dimension: "TF"
            },
            {
                id: 'mbti_4',
                question: "如果今天要画画，你会先想好画什么再动手，还是直接随心所欲开始？",
                options: [
                    { text: "先想好再动手", value: "J" },
                    { text: "随心所欲开始", value: "P" }
                ],
                dimension: "JP"
            }
        ],
        disc: [
            {
                id: 'disc_1',
                question: "当和小伙伴一起选游戏时，你是不是更喜欢自己决定规则？",
                options: [
                    { text: "是的，我喜欢决定规则", value: "D" },
                    { text: "不是，我随大家", value: "非D" }
                ],
                dimension: "D"
            },
            {
                id: 'disc_2',
                question: "你在班级里是不是经常让大家都跟着你一起唱歌或讲笑话？",
                options: [
                    { text: "是的，我喜欢带动气氛", value: "I" },
                    { text: "不是，我比较安静", value: "非I" }
                ],
                dimension: "I"
            },
            {
                id: 'disc_3',
                question: "你更喜欢每天玩同一个游戏，还是天天换新游戏都试一遍？",
                options: [
                    { text: "喜欢玩熟悉的游戏", value: "S" },
                    { text: "喜欢尝试新游戏", value: "非S" }
                ],
                dimension: "S"
            },
            {
                id: 'disc_4',
                question: "画画前你会不会先在纸上简单画草图，想好颜色再正式上色？",
                options: [
                    { text: "会先画草图", value: "C" },
                    { text: "直接开始画", value: "非C" }
                ],
                dimension: "C"
            }
        ],
        bigFive: [
            {
                id: 'big5_1',
                question: "我喜欢在课堂上主动回答老师的问题。",
                dimension: "外向性",
                type: "likert5"
            },
            {
                id: 'big5_2',
                question: "当同学遇到困难时，我愿意主动帮助他。",
                dimension: "宜人性",
                type: "likert5"
            },
            {
                id: 'big5_3',
                question: "我做作业时会认真检查每一个步骤，确保没有错误。",
                dimension: "尽责性",
                type: "likert5"
            },
            {
                id: 'big5_4',
                question: "如果作业做错了，我不会太烦躁，而是冷静想办法改正。",
                dimension: "情绪稳定性",
                type: "likert5"
            },
            {
                id: 'big5_5',
                question: "我喜欢在课外尝试新的游戏规则或手工创意。",
                dimension: "开放性",
                type: "likert5"
            }
        ]
    },
    parent: {
        mbti: [
            {
                id: 'mbti_1',
                question: "和其他家长一起分享育儿经验时，你更享受热闹交流，还是更喜欢静静听别人说？",
                options: [
                    { text: "喜欢热闹交流", value: "E" },
                    { text: "喜欢静静听", value: "I" }
                ],
                dimension: "EI"
            },
            {
                id: 'mbti_2',
                question: "在孩子教育上，你是更相信传统方法，还是更愿意尝试新颖教育理念？",
                options: [
                    { text: "相信传统方法", value: "S" },
                    { text: "尝试新颖理念", value: "N" }
                ],
                dimension: "SN"
            },
            {
                id: 'mbti_3',
                question: "当孩子成绩下滑时，你是先从客观数据分析原因，还是先关注孩子的情绪反应？",
                options: [
                    { text: "分析客观数据", value: "T" },
                    { text: "关注情绪反应", value: "F" }
                ],
                dimension: "TF"
            },
            {
                id: 'mbti_4',
                question: "你喜欢为孩子制定详细的学习计划，还是根据当下情况灵活调整？",
                options: [
                    { text: "制定详细计划", value: "J" },
                    { text: "灵活调整", value: "P" }
                ],
                dimension: "JP"
            }
        ],
        disc: [
            {
                id: 'disc_1',
                question: "在家庭决策时，你是否习惯自己做最后决定？",
                options: [
                    { text: "是的，我习惯做决定", value: "D" },
                    { text: "不是，我会征求意见", value: "非D" }
                ],
                dimension: "D"
            },
            {
                id: 'disc_2',
                question: "你在朋友圈里常常分享孩子的成长故事，带动大家关注家庭教育吗？",
                options: [
                    { text: "是的，经常分享", value: "I" },
                    { text: "不是，较少分享", value: "非I" }
                ],
                dimension: "I"
            },
            {
                id: 'disc_3',
                question: "你是否更喜欢维持固定的家庭作息，不太愿意做太多变动？",
                options: [
                    { text: "是的，喜欢固定作息", value: "S" },
                    { text: "不是，喜欢灵活调整", value: "非S" }
                ],
                dimension: "S"
            },
            {
                id: 'disc_4',
                question: "为孩子做决定前，你会花大量时间搜集资料、比较利弊吗？",
                options: [
                    { text: "是的，会详细研究", value: "C" },
                    { text: "不会，凭直觉决定", value: "非C" }
                ],
                dimension: "C"
            }
        ],
        bigFive: [
            {
                id: 'big5_1',
                question: "我喜欢与其他家长一起参加育儿沙龙或活动。",
                dimension: "外向性",
                type: "likert5"
            },
            {
                id: 'big5_2',
                question: "我通常能理解并尊重孩子的想法和感受。",
                dimension: "宜人性",
                type: "likert5"
            },
            {
                id: 'big5_3',
                question: "我会提前规划孩子的学习与发展路线，并督促执行。",
                dimension: "尽责性",
                type: "likert5"
            },
            {
                id: 'big5_4',
                question: "当孩子情绪失控时，我能保持冷静，理性引导。",
                dimension: "情绪稳定性",
                type: "likert5"
            },
            {
                id: 'big5_5',
                question: "我愿意尝试新的教育方法，哪怕一开始不太习惯。",
                dimension: "开放性",
                type: "likert5"
            }
        ]
    }
};

// 测试结果分析函数
function analyzeMBTI(answers) {
    const dimensions = {
        EI: { E: 0, I: 0 },
        SN: { S: 0, N: 0 },
        TF: { T: 0, F: 0 },
        JP: { J: 0, P: 0 }
    };

    answers.forEach(answer => {
        const dimension = answer.dimension;
        const value = answer.value;
        dimensions[dimension][value]++;
    });

    return {
        E_I: dimensions.EI.E > dimensions.EI.I ? 'E' : 'I',
        S_N: dimensions.SN.S > dimensions.SN.N ? 'S' : 'N',
        T_F: dimensions.TF.T > dimensions.TF.F ? 'T' : 'F',
        J_P: dimensions.JP.J > dimensions.JP.P ? 'J' : 'P'
    };
}

function analyzeDISC(answers) {
    const scores = {
        D: 0,
        I: 0,
        S: 0,
        C: 0
    };

    answers.forEach(answer => {
        if (answer.value.startsWith('非')) return;
        scores[answer.value]++;
    });

    return scores;
}

function analyzeBigFive(answers) {
    const dimensions = {
        外向性: 0,
        宜人性: 0,
        尽责性: 0,
        情绪稳定性: 0,
        开放性: 0
    };

    answers.forEach(answer => {
        dimensions[answer.dimension] += answer.score;
    });

    return dimensions;
}

// 将所有对象和函数暴露到全局作用域
window.questionBank = questionBank;
window.analyzeMBTI = analyzeMBTI;
window.analyzeDISC = analyzeDISC;
window.analyzeBigFive = analyzeBigFive; 