# OauthAccessToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**access_token** | **str** |  | [optional] 
**refresh_token** | **str** |  | [optional] 
**access_token_expires_at** | **str** |  | [optional] 
**refresh_token_expires_at** | **str** |  | [optional] 
**client_id** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 
**scopes** | **str** |  | [optional] 
**created_at** | **str** |  | [optional] 
**updated_at** | **str** |  | [optional] 

## Example

```python
from better_auth.models.oauth_access_token import OauthAccessToken

# TODO update the JSON string below
json = "{}"
# create an instance of OauthAccessToken from a JSON string
oauth_access_token_instance = OauthAccessToken.from_json(json)
# print the JSON string representation of the object
print(OauthAccessToken.to_json())

# convert the object into a dict
oauth_access_token_dict = oauth_access_token_instance.to_dict()
# create an instance of OauthAccessToken from a dict
oauth_access_token_from_dict = OauthAccessToken.from_dict(oauth_access_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


