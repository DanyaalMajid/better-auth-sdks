# VerifyEmailGet200ResponseUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | User ID | 
**email** | **str** | User email | 
**name** | **str** | User name | 
**image** | **str** | User image URL | 
**email_verified** | **bool** | Indicates if the user email is verified | 
**created_at** | **str** | User creation date | 
**updated_at** | **str** | User update date | 

## Example

```python
from better_auth.models.verify_email_get200_response_user import VerifyEmailGet200ResponseUser

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyEmailGet200ResponseUser from a JSON string
verify_email_get200_response_user_instance = VerifyEmailGet200ResponseUser.from_json(json)
# print the JSON string representation of the object
print(VerifyEmailGet200ResponseUser.to_json())

# convert the object into a dict
verify_email_get200_response_user_dict = verify_email_get200_response_user_instance.to_dict()
# create an instance of VerifyEmailGet200ResponseUser from a dict
verify_email_get200_response_user_from_dict = VerifyEmailGet200ResponseUser.from_dict(verify_email_get200_response_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


