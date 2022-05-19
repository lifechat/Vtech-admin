# 使用react中的坑与槽点
 
 **Q:** 
 关于 @ant-design/pro-form 内容框在获取接口数据，Ref.current.setFielValue()中ModalForm第一次获取数据为null
 **A:**
 原因: **首次加载要等form表单初次render之后才能获取到接口的对应数据**
 解决tip： 可以修改组件@ant-design/pro-form 这部分里面的逻辑源码，我采用事件循环机制里面的异步调用，将获取数据部分通过settimeout进入**event queue**中，等stack中事件全部执行完成之后在调用获取部分的method，
```javascript
 if (data){
    setEditType('update');
    setTimeout(() => {
        formRef.current?.setFieldsValue({
        ...data,
        userResTagIds: data.userResTagIds || [],
        fileList: generateFileList(data.coverUrl),
    });
    formData.current = data;
}, 100);
```