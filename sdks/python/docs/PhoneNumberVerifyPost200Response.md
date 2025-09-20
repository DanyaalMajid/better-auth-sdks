# PhoneNumberVerifyPost200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **bool** | Indicates if the verification was successful | 
**token** | **str** | Session token if session is created, null if disableSession is true or no session is created | [optional] 
**user** | [**PhoneNumberVerifyPost200ResponseUser**](PhoneNumberVerifyPost200ResponseUser.md) |  | [optional] 

## Example

```python
from better_auth.models.phone_number_verify_post200_response import PhoneNumberVerifyPost200Response

# TODO update the JSON string below
json = "{}"
# create an instance of PhoneNumberVerifyPost200Response from a JSON string
phone_number_verify_post200_response_instance = PhoneNumberVerifyPost200Response.from_json(json)
# print the JSON string representation of the object
print(PhoneNumberVerifyPost200Response.to_json())

# convert the object into a dict
phone_number_verify_post200_response_dict = phone_number_verify_post200_response_instance.to_dict()
# create an instance of PhoneNumberVerifyPost200Response from a dict
phone_number_verify_post200_response_from_dict = PhoneNumberVerifyPost200Response.from_dict(phone_number_verify_post200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


