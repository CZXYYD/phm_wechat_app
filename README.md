## 端到端工业app
该项目只保留了小程序部分，机器学习相关内容与数据集已移除

### data2wechat.csv文件说明
这是从测试集2提取的数据，前33列为特征，第34列为label，是预测的故障类型，第35列为day，表示周几，第36列为machine，表示第几台机器。
<br>数据假设：共4个机组，每个机组工作7天，每个机组每天产生40条数据。
<br>开发时自己把这个文件导入到云端数据库

### 日志
0421：小程序增加云函数query，实现查询功能，部署在云端可满足一次查询40条数据的需求。

##### 这是我手动加的一行
