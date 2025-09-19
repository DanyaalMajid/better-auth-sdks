# PhoneNumberVerifyPost200ResponseUser

User object with phone number details, null if no user is created or found

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Unique identifier of the user | 
**email** | **str** | User&#39;s email address | [optional] 
**email_verified** | **bool** | Whether the email is verified | [optional] 
**name** | **str** | User&#39;s name | [optional] 
**image** | **str** | User&#39;s profile image URL | [optional] 
**phone_number** | **str** | User&#39;s phone number | 
**phone_number_verified** | **bool** | Whether the phone number is verified | 
**created_at** | **datetime** | Timestamp when the user was created | 
**updated_at** | **datetime** | Timestamp when the user was last updated | 

## Example

```python
from better_auth.models.phone_number_verify_post200_response_user import PhoneNumberVerifyPost200ResponseUser

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneNumberVerifyPost200ResponseUser from a JSON string
phone_number_verify_post200_response_user_instance = PhoneNumberVerifyPost200ResponseUser.from_json(json)
# print the JSON string representation of the object
print(PhoneNumberVerifyPost200ResponseUser.to_json())

# convert the object into a dict
phone_number_verify_post200_response_user_dict = phone_number_verify_post200_response_user_instance.to_dict()
# create an instance of PhoneNumberVerifyPost200ResponseUser from a dict
phone_number_verify_post200_response_user_from_dict = PhoneNumberVerifyPost200ResponseUser.from_dict(phone_number_verify_post200_response_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


