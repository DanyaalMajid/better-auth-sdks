# Oauth2UserinfoGet200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sub** | **str** | Subject identifier (user ID) | 
**email** | **str** | User&#39;s email address, included if &#39;email&#39; scope is granted | [optional] 
**name** | **str** | User&#39;s full name, included if &#39;profile&#39; scope is granted | [optional] 
**picture** | **str** | User&#39;s profile picture URL, included if &#39;profile&#39; scope is granted | [optional] 
**given_name** | **str** | User&#39;s given name, included if &#39;profile&#39; scope is granted | [optional] 
**family_name** | **str** | User&#39;s family name, included if &#39;profile&#39; scope is granted | [optional] 
**email_verified** | **bool** | Whether the email is verified, included if &#39;email&#39; scope is granted | [optional] 

## Example

```python
from better_auth.models.oauth2_userinfo_get200_response import Oauth2UserinfoGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of Oauth2UserinfoGet200Response from a JSON string
oauth2_userinfo_get200_response_instance = Oauth2UserinfoGet200Response.from_json(json)
# print the JSON string representation of the object
print(Oauth2UserinfoGet200Response.to_json())

# convert the object into a dict
oauth2_userinfo_get200_response_dict = oauth2_userinfo_get200_response_instance.to_dict()
# create an instance of Oauth2UserinfoGet200Response from a dict
oauth2_userinfo_get200_response_from_dict = Oauth2UserinfoGet200Response.from_dict(oauth2_userinfo_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


