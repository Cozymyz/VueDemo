package com.example.demo.mapper;

import com.example.demo.model.User;
import com.example.demo.model.UserExample;
import java.util.List;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {

    List<User> allUser();

    //    @Select("select * from user where 1=1 limit #{no}, #{pageSize}")
    List<User> getPageUser(int no, int pageSize);

    List<User> selectByUserName(String userName);
    long countByExample(UserExample example);

    int deleteByExample(UserExample example);

    int deleteByPrimaryKey(Integer userId);

    int insert(User record);

    int insertSelective(User record);

    List<User> selectByExample(UserExample example);

    User selectByPrimaryKey(Integer userId);

    int updateByExampleSelective(@Param("record") User record, @Param("example") UserExample example);

    int updateByExample(@Param("record") User record, @Param("example") UserExample example);

    int updateByPrimaryKeySelective(User record);

    int updateByPrimaryKey(User record);
}